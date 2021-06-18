import Wheel from './elements/wheel';
import Slot from './elements/slot';
import Start from './elements/button';


class App {
    constructor() {
        this.app = new PIXI.Application({
            width: 750,
            height: 450,
            backgroundColor: 0xb7eb34,
        });
        document.body.appendChild(this.app.view);

        this.loader = PIXI.Loader.shared;
        this.StartButton = new Start();
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
    }

    setBarabanToSesionStorage() {
        this.wheels.forEach((wheel) => {
            wheel.setDataToSesionStorage();
        });
    }

    setup() {
        if (sessionStorage.getItem("picture0")) {
            this.wheels.forEach((wheel)=>{
                wheel.drawBarabanByPict(JSON.parse(sessionStorage.getItem("picture"+wheel.x)), this.loader, this.app)
            });
        } else {
            this.spinDrum();
        }
    }

    spinDrum() {
        this.wheels.forEach(wheel => {
            wheel.drawBaraban(this.loader, this.app);
        })
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

new App();