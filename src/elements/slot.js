export default class Slot {
    constructor(name) {
        this._name = name;
    }

    preSprite(loader) {
        return new PIXI.Sprite(
            loader.resources["../docs/assets/symbols/" + this._name + ".png"].texture
        );
    }

    toJSON() {
        return JSON.stringify({name: this._name});
    }

    equals(slot) {
        return (this._name === slot._name);
    }
}