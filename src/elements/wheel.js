export default class Wheel {
    constructor(x, arr) {
        this.x = x;
        this.baraban = [];
        for (let i = 0; i < arr.length; i++) {
            this.baraban[i] = arr[i];
        }
    }

    draw(sprite, position, container) {
        sprite.anchor.y = 0.5;
        sprite.anchor.x = 0.5;
        sprite.y = (window.innerHeight/2)-150+position*150;
        sprite.x = (window.innerWidth/2)-300+this.x*150;
        sprite.width=150;
        sprite.height=150;
        container.addChild(sprite);
    }

    drawBaraban(loader, app) {
        this.picture = this.randomPicture();
        sessionStorage.setItem("picture"+this.x, JSON.stringify(this.picture));
        return this.drawBarabanByPict(this.picture, loader, app);
    }

    drawBarabanByPict(picture, loader, app) {
        this.container = new PIXI.Container();
        this.draw(this.baraban[picture].preSprite(loader), 1, this.container);
        this.draw(this.baraban[this.topPicture(picture)].preSprite(loader), 0, this.container);
        this.draw(this.baraban[this.bottomPicture(picture)].preSprite(loader), 2, this.container); 
        return app.stage.addChild(this.container);
    }

    topPicture(picture) {
        return (picture === 0) ? this.baraban.length-1 : picture-1;
    }

    bottomPicture(picture) {
        return (picture === this.baraban.length-1) ? 0 : picture+1;
    }

    center() {
        return this.baraban[this.picture];
    }

    top() {
        return this.baraban[this.topPicture(this.picture)];
    }

    bottom() {
        return this.baraban[this.bottomPicture(this.picture)];
    }

    pos(func) {
        return eval("this."+func+"()");
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