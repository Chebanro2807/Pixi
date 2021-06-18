export default class Wheel {
    constructor(x, arr) {
        this.x = x;
        this.baraban = [];
        for (let i = 0; i < arr.length; i++) { // clone arr
            this.baraban[i] = arr[i];
        }
    }

    cleanDrums() {
        
    }

    draw(sprite, position, app) {
        sprite.y = position*150;
        sprite.x = this.x*150;
        sprite.width=150;
        sprite.height=150;
        app.stage.addChild(sprite);
    }

    drawBaraban(loader, app) {
        let picture = this.randomPicture();
        sessionStorage.setItem("picture"+this.x, JSON.stringify(picture));
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

    setDataToSesionStorage() {
        let slotJSON = [];
        this.baraban.forEach(slot => {
            slotJSON.push(slot.toJSON()); 
        });
        sessionStorage.setItem("baraban"+this.x, JSON.stringify(slotJSON))
    }
}