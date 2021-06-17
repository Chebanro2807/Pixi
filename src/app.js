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
            this.wheels.push(new Wheel(i, this.shuffleArray(slots)));
        }
        slots.forEach(element => {
            this.loader.add("../src/assets/symbols/" + element._name + ".png");
        });
        this.loader.load(this.setup.bind(this));
    }

    setup() {
        this.wheels.forEach(wheel => {
            wheel.drawBaraban(this.loader, this.app);
        })
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

new App();