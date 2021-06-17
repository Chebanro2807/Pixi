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
        this.slots = [new Slot('A'),new Slot('B'),new Slot('C'),new Slot('D'),new Slot('E'),new Slot('F'),new Slot('G'),new Slot('H')];
        this.weels = [];
        for(let i = 0; i < 5; i++) {
            this.weels.push(new Wheel(i));
        }
        this.slots.forEach(element => {
            this.loader.add("../src/assets/symbols/" + element._name + ".png");
        });
        this.loader.load(this.setup.bind(this));
    }
    setup() {
        this.weels.forEach(wheel => {
            this.shuffledSlots = wheel.shuffleArray(this.slots);
            let picture = this.randomPicture();
            wheel.draw(this.shuffledSlots[picture].preSprite(this.loader),1,this.app);
            wheel.draw(this.shuffledSlots[(picture === 0) ? this.slots.length-1 : picture-1].preSprite(this.loader),0,this.app);
            wheel.draw(this.shuffledSlots[(picture === this.slots.length-1) ? 0 : picture+1].preSprite(this.loader),2,this.app); 
        })
    }
    randomPicture() {
        return Math.floor(Math.random() * (this.slots.length-1));
    }
}

new App();