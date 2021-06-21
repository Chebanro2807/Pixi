export default class Start {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();

        this.basicText = new PIXI.Text('Start');

        this.basicText.x = window.innerWidth/2;
        this.basicText.y = window.innerHeight/2-300;
        this.basicText.anchor.y = 0.5;
        this.basicText.anchor.x = 0.5;

        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'],
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
            backgroundColor: 0x3471eb
        });
        this.button = this.draw(this.app);
    }

    draw(app) {
        this.container.addChild(this.basicText);
        return app.stage.addChild(this.container);
    }
}