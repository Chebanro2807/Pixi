import Wheel from './elements/wheel';
import Slot from './elements/slot';
import Start from './elements/button';


class App {
    constructor() {
        this.loader = PIXI.Loader.shared;
        this.StartButton = new Start();
        this.slots = [new Slot('A'),new Slot('B'),new Slot('C'),new Slot('D'),new Slot('E'),new Slot('F'),new Slot('G'),new Slot('H')];
        this.weels = [new Wheel(),new Wheel(),new Wheel(),new Wheel(),new Wheel()];
        this.slots.forEach(element => {
            this.loader.add("../src/assets/symbols/" + element._name + ".png");
        });
        this.loader.load(this.setup.bind(this));
    }
    setup() {
        this.weels.forEach(wheel => {
            let picture = this.randomPicture();
            let shuffledSlots = this.shuffleArray(this.slots);
            wheel.draw(shuffledSlots[picture].preSprite(this.loader),1);
            wheel.draw(shuffledSlots[(picture === 0) ? this.slots.length-1 : picture-1].preSprite(this.loader),0);
            wheel.draw(shuffledSlots[(picture === this.slots.length-1) ? 0 : picture+1].preSprite(this.loader),2); 
        })
    }
    randomPicture() {
        return Math.floor(Math.random() * (this.slots.length-1));
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

new App();