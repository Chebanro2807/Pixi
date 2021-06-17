export default class Wheel {
    constructor(x, arr) {
        this.x = x;
        this.baraban = [];
        for (let i = 0; i < arr.length; i++) { // clone arr
            this.baraban[i] = arr[i];
        }
    }

    draw(sprite, position, app) {
        sprite.y = position*150;
        sprite.x = this.x*150;
        app.stage.addChild(sprite);
        sprite.width=150;
        sprite.height=150;
    }

    drawBaraban(loader, app) {
        let picture = this.randomPicture();
        this.drawBarabanByPict(picture, loader, app);
    }

    drawBarabanByPict(picture, loader, app) {
        this.draw(this.baraban[picture].preSprite(loader), 1, app);
        this.draw(this.baraban[(picture === 0) ? this.baraban.length-1 : picture-1].preSprite(loader), 0, app);
        this.draw(this.baraban[(picture === this.baraban.length-1) ? 0 : picture+1].preSprite(loader), 2, app); 
    }

    randomPicture() {
        return Math.floor(Math.random() * (this.baraban.length-1));
    }
}