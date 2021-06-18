export default class Start {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();
        this.container.width 
        this.basicText = new PIXI.Text('Start');
        this.basicText.x = 750;
        this.basicText.y = 100;

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
        });
        this.button = this.draw(this.app);
    }

    draw(app) {
        this.container.addChild(this.basicText);
        return app.stage.addChild(this.container);
    }
}