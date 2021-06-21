export default class Score {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();
        this.basicText = new PIXI.Text('1000');

        this.basicText.x = window.innerWidth/2;
        this.basicText.y = window.innerHeight/2-250;
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
        });
        this.draw(this.app);
    }

    draw(app) {
        this.container.addChild(this.basicText);
        return app.stage.addChild(this.container);
    }

    changeScoreByTurn() {
        this.changeScoreByPrize(-50);
    }

    changeScoreByPrize(prize) {
        this.basicText.text = Number(this.basicText.text) + prize;
    }
}