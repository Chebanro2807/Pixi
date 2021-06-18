/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/wheel */ \"./src/elements/wheel.js\");\n/* harmony import */ var _elements_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/slot */ \"./src/elements/slot.js\");\n/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/button */ \"./src/elements/button.js\");\n/* harmony import */ var _elements_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/score */ \"./src/elements/score.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.app = new PIXI.Application({\r\n            antialias: true,\r\n            autoDensity: true,\r\n            width: 850,\r\n            height: 450,\r\n            backgroundColor: 0xb7eb34,\r\n            resolution: devicePixelRatio,\r\n        });\r\n        document.body.appendChild(this.app.view);\r\n\r\n        this.loader = PIXI.Loader.shared;\r\n        this.StartButton = new _elements_button__WEBPACK_IMPORTED_MODULE_2__.default(this.app);\r\n        this.Scoore = new _elements_score__WEBPACK_IMPORTED_MODULE_3__.default(this.app);\r\n        let slots = [new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('A'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('B'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('C'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('D'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('E'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('F'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('G'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('H')];\r\n        this.wheels = [];\r\n        for(let i = 0; i < 5; i++) {\r\n            if (sessionStorage.getItem(\"baraban\"+i)) {\r\n                let baraban = JSON.parse(sessionStorage.getItem(\"baraban\"+i));\r\n                let slotsJSON = [];\r\n                baraban.forEach((drum)=>{\r\n                    slotsJSON.push(new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default(JSON.parse(drum).name));\r\n                });\r\n                this.wheels.push(new _elements_wheel__WEBPACK_IMPORTED_MODULE_0__.default(i, slotsJSON));\r\n            } else {\r\n                this.wheels.push(new _elements_wheel__WEBPACK_IMPORTED_MODULE_0__.default(i, this.shuffleArray(slots)));\r\n                this.setBarabanToSesionStorage();\r\n            }\r\n        }\r\n        slots.forEach(element => {\r\n            this.loader.add(\"../src/assets/symbols/\" + element._name + \".png\");\r\n        });\r\n        this.loader.load(this.setup.bind(this));\r\n        this.app.stage.interactive = true;\r\n        this.StartButton.button.interactive = true;\r\n        this.StartButton.button.buttonMode = true;\r\n        this.StartButton.button.on(\"pointerdown\", this.click.bind(this));\r\n    }\r\n\r\n    click() {\r\n        this.cleanDrums();\r\n        this.spinDrum();\r\n        console.log(this.loader)\r\n        // this.spinGame();\r\n    }\r\n\r\n    // spinGame() {\r\n    //     this.wheels.forEach((wheel)=>{\r\n    //         gsap.from(wheel, 2, {duration:10, y:300});\r\n    //     })\r\n    //     gsap.from(this.StartButton.button, 2, {duration:10, y:100});\r\n    // }\r\n\r\n    setBarabanToSesionStorage() {\r\n        this.wheels.forEach((wheel) => {\r\n            wheel.setDataToSesionStorage();\r\n        });\r\n    }\r\n\r\n    setup() {\r\n        if (sessionStorage.getItem(\"picture0\")) {\r\n            this.wheels.forEach((wheel)=>{\r\n                wheel.drawBarabanByPict(JSON.parse(sessionStorage.getItem(\"picture\"+wheel.x)), this.loader, this.app)\r\n            });\r\n        } else {\r\n            this.spinDrum();\r\n        }\r\n    }\r\n\r\n    cleanDrums() {\r\n        this.app.stage.removeChildren(2,7);\r\n    }\r\n\r\n    spinDrum() {\r\n        let tl = gsap.timeline();\r\n        this.wheels.forEach(wheel => {\r\n            let item = wheel.drawBaraban(this.loader, this.app);\r\n            tl.from(item,1.3, {duration: 0.3, y: -450, ease: Elastic.easeInOut.config(6, 0)});\r\n        })\r\n    }\r\n\r\n    shuffleArray(array) {\r\n        return array.sort(() => Math.random() - 0.5);\r\n    }\r\n}\r\n\r\nnew App();\n\n//# sourceURL=webpack://webpack-demo/./src/app.js?");

/***/ }),

/***/ "./src/elements/button.js":
/*!********************************!*\
  !*** ./src/elements/button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\nclass Start {\r\n    constructor(app) {\r\n        this.app = app;\r\n        this.container = new PIXI.Container();\r\n\r\n        this.basicText = new PIXI.Text('Start');\r\n        this.basicText.x = 750;\r\n        this.basicText.y = 200;\r\n\r\n        this.style = new PIXI.TextStyle({\r\n            fontFamily: 'Arial',\r\n            fontSize: 36,\r\n            fontStyle: 'italic',\r\n            fontWeight: 'bold',\r\n            fill: ['#ffffff', '#00ff99'],\r\n            stroke: '#4a1850',\r\n            strokeThickness: 5,\r\n            dropShadow: true,\r\n            dropShadowColor: '#000000',\r\n            dropShadowBlur: 4,\r\n            dropShadowAngle: Math.PI / 6,\r\n            dropShadowDistance: 6,\r\n            wordWrap: true,\r\n            wordWrapWidth: 440,\r\n            lineJoin: 'round',\r\n        });\r\n        this.button = this.draw(this.app);\r\n    }\r\n\r\n    draw(app) {\r\n        this.container.addChild(this.basicText);\r\n        return app.stage.addChild(this.container);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/button.js?");

/***/ }),

/***/ "./src/elements/score.js":
/*!*******************************!*\
  !*** ./src/elements/score.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n    constructor(app) {\r\n        this.app = app;\r\n        this.container = new PIXI.Container();\r\n        this.basicText = new PIXI.Text('000');\r\n        this.basicText.x = 750;\r\n        this.basicText.y = 100;\r\n\r\n        this.style = new PIXI.TextStyle({\r\n            fontFamily: 'Arial',\r\n            fontSize: 36,\r\n            fontStyle: 'italic',\r\n            fontWeight: 'bold',\r\n            fill: ['#ffffff', '#00ff99'],\r\n            stroke: '#4a1850',\r\n            strokeThickness: 5,\r\n            dropShadow: true,\r\n            dropShadowColor: '#000000',\r\n            dropShadowBlur: 4,\r\n            dropShadowAngle: Math.PI / 6,\r\n            dropShadowDistance: 6,\r\n            wordWrap: true,\r\n            wordWrapWidth: 440,\r\n            lineJoin: 'round',\r\n        });\r\n        this.button = this.draw(this.app);\r\n    }\r\n\r\n    draw(app) {\r\n        this.container.addChild(this.basicText);\r\n        return app.stage.addChild(this.container);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/score.js?");

/***/ }),

/***/ "./src/elements/slot.js":
/*!******************************!*\
  !*** ./src/elements/slot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slot)\n/* harmony export */ });\nclass Slot {\r\n    constructor(name) {\r\n        this._name = name;\r\n    }\r\n\r\n    preSprite(loader) {\r\n        return new PIXI.Sprite(\r\n            loader.resources[\"../src/assets/symbols/\" + this._name + \".png\"].texture\r\n        );\r\n    }\r\n\r\n    toJSON() {\r\n        return JSON.stringify({name: this._name});\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/slot.js?");

/***/ }),

/***/ "./src/elements/wheel.js":
/*!*******************************!*\
  !*** ./src/elements/wheel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wheel)\n/* harmony export */ });\nclass Wheel {\r\n    constructor(x, arr) {\r\n        this.x = x;\r\n        this.baraban = [];\r\n        for (let i = 0; i < arr.length; i++) { // clone arr\r\n            this.baraban[i] = arr[i];\r\n        }\r\n    }\r\n\r\n    draw(sprite, position, container) {\r\n        sprite.y = position*150;\r\n        sprite.x = this.x*150;\r\n        sprite.width=150;\r\n        sprite.height=150;\r\n        container.addChild(sprite);\r\n    }\r\n\r\n    drawBaraban(loader, app) {\r\n        let picture = this.randomPicture();\r\n        sessionStorage.setItem(\"picture\"+this.x, JSON.stringify(picture));\r\n        return this.drawBarabanByPict(picture, loader, app);\r\n    }\r\n\r\n    drawBarabanByPict(picture, loader, app) {\r\n        let container = new PIXI.Container();\r\n        this.draw(this.baraban[picture].preSprite(loader), 1, container);\r\n        this.draw(this.baraban[(picture === 0) ? this.baraban.length-1 : picture-1].preSprite(loader), 0, container);\r\n        this.draw(this.baraban[(picture === this.baraban.length-1) ? 0 : picture+1].preSprite(loader), 2, container); \r\n        return app.stage.addChild(container);\r\n    }\r\n\r\n    randomPicture() {\r\n        return Math.floor(Math.random() * (this.baraban.length-1));\r\n    }\r\n\r\n    setDataToSesionStorage() {\r\n        let slotJSON = [];\r\n        this.baraban.forEach(slot => {\r\n            slotJSON.push(slot.toJSON()); \r\n        });\r\n        sessionStorage.setItem(\"baraban\"+this.x, JSON.stringify(slotJSON))\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/wheel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;