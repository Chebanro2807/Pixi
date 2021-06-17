export default class Wheel {
    constructor(x) {
        this.x = x;
    }

    draw(sprite, position, app) {
        sprite.y = position*150;
        sprite.x = this.x*150;
        app.stage.addChild(sprite);
        sprite.width=150;
        sprite.height=150;
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}