export default class Wheel {
    constructor() {
        this.app = new PIXI.Application({
            width: 150,
            height: 450,
            backgroundColor: 0xb7eb34,
        });

        document.body.appendChild(this.app.view);
    }

    draw(sprite, position) {
        sprite.y = position*150;
        this.app.stage.addChild(sprite);
        sprite.width=150;
        sprite.height=150;
    }
}