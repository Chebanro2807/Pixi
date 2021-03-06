export default class Slot {
    constructor(name) {
        this._name = name;
    }

    preSprite(loader) {
        return new PIXI.Sprite(
            (window.location.hostname == "127.0.0.1" || window.location.hostname == "localhost") ?
                loader.resources["/docs/assets/symbols/" + this._name + ".png"].texture :
                loader.resources["/Pixi/docs/assets/symbols/" + this._name + ".png"].texture
        );
    }

    toJSON() {
        return JSON.stringify({name: this._name});
    }

    equals(slot) {
        return (this._name === slot._name);
    }
}