export default class MaskBottom {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();
        this.mask = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.mask.tint = 0xb7eb34;
        this.mask.width = window.innerWidth;
        this.mask.height = window.innerHeight;

        this.mask.x = window.innerWidth/2;
        this.mask.y = window.innerHeight/2 + 225;
        this.mask.anchor.y = 0;
        this.mask.anchor.x = 0.5;

        this.draw(app)
    }

    draw(app){
        this.container.addChild(this.mask);
        return app.stage.addChild(this.container);
    }
}