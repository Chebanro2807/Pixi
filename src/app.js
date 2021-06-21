import Wheel from './elements/wheel';
import Slot from './elements/slot';
import Start from './elements/button';
import Score from './elements/score';
import Win from './elements/win';
import SmallWin from './elements/smallwin';


class App {
    constructor() {
        this.app = new PIXI.Application({
            antialias: true,
            autoDensity: true,
            width: 850,
            height: 450,
            backgroundColor: 0xb7eb34,
            resolution: devicePixelRatio,
        });
        document.body.appendChild(this.app.view);

        this.cliclLock = false;
        this.loader = PIXI.Loader.shared;
        this.startButton = new Start(this.app);
        this.score = new Score(this.app);
        let slots = [new Slot('A'),new Slot('B'),new Slot('C'),new Slot('D'),new Slot('E'),new Slot('F'),new Slot('G'),new Slot('H')];
        this.wheels = [];
        for(let i = 0; i < 5; i++) {
            if (sessionStorage.getItem("baraban"+i)) {
                let baraban = JSON.parse(sessionStorage.getItem("baraban"+i));
                let slotsJSON = [];
                baraban.forEach((drum)=>{
                    slotsJSON.push(new Slot(JSON.parse(drum).name));
                });
                this.wheels.push(new Wheel(i, slotsJSON));
            } else {
                this.wheels.push(new Wheel(i, this.shuffleArray(slots)));
                this.setBarabanToSesionStorage();
            }
        }
        slots.forEach(element => {
            this.loader.add("../src/assets/symbols/" + element._name + ".png");
        });
        this.loader.load(this.setup.bind(this));
        this.app.stage.interactive = true;
        this.startButton.button.interactive = true;
        this.startButton.button.buttonMode = true;
        this.startButton.button.on("pointerdown", this.click.bind(this));
    }

    click() {
        if (this.cliclLock) {
            return;
        }
        this.spinDrum();
        this.score.changeScoreByTurn();
        Win.win(this.wheels, this.score);
        SmallWin.win(this.wheels, this.score);
    }

    setBarabanToSesionStorage() {
        this.wheels.forEach((wheel) => {
            wheel.setDataToSesionStorage();
        });
    }

    setup() {
        (sessionStorage.getItem("picture0")) ? this.spinDrumStartByStorage() : this.spinDrumStart();
    }

    cleanDrums() {
        this.app.stage.removeChildren(2,7);
        this.cliclLock = false;
    }

    spinDrumStart() {
        this.wheels.forEach((wheel)=>{
            wheel.drawBaraban(this.loader, this.app);
        });
    }

    spinDrumStartByStorage() {
        this.wheels.forEach((wheel)=>{
            wheel.drawBarabanByPict(JSON.parse(sessionStorage.getItem("picture"+wheel.x)), this.loader, this.app)
        });
    }

    spinDrum() {
        this.cliclLock = true;
        let tl = gsap.timeline();
        this.wheels.forEach(wheel => {
            let item = wheel.container;
            tl.to(item, {duration: 0.2, y: 450, ease: Elastic.easeInOut.config(6, 0)});
        })
        this.wheels.forEach(wheel => {
            let item = wheel.drawBaraban(this.loader, this.app);
            tl.from(item, {duration: 0.2, y: -450, ease: Elastic.easeInOut.config(6, 0)}).then(this.cleanDrums.bind(this));
        })
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

new App();