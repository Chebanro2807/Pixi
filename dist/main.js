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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/wheel */ \"./src/elements/wheel.js\");\n/* harmony import */ var _elements_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/slot */ \"./src/elements/slot.js\");\n/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/button */ \"./src/elements/button.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.app = new PIXI.Application({\r\n            width: 750,\r\n            height: 450,\r\n            backgroundColor: 0xb7eb34,\r\n        });\r\n        document.body.appendChild(this.app.view);\r\n\r\n        this.loader = PIXI.Loader.shared;\r\n        this.StartButton = new _elements_button__WEBPACK_IMPORTED_MODULE_2__.default();\r\n        this.slots = [new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('A'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('B'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('C'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('D'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('E'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('F'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('G'),new _elements_slot__WEBPACK_IMPORTED_MODULE_1__.default('H')];\r\n        this.weels = [];\r\n        for(let i = 0; i < 5; i++) {\r\n            this.weels.push(new _elements_wheel__WEBPACK_IMPORTED_MODULE_0__.default(i));\r\n        }\r\n        this.slots.forEach(element => {\r\n            this.loader.add(\"../src/assets/symbols/\" + element._name + \".png\");\r\n        });\r\n        this.loader.load(this.setup.bind(this));\r\n    }\r\n    setup() {\r\n        this.weels.forEach(wheel => {\r\n            this.shuffledSlots = wheel.shuffleArray(this.slots);\r\n            let picture = this.randomPicture();\r\n            wheel.draw(this.shuffledSlots[picture].preSprite(this.loader),1,this.app);\r\n            wheel.draw(this.shuffledSlots[(picture === 0) ? this.slots.length-1 : picture-1].preSprite(this.loader),0,this.app);\r\n            wheel.draw(this.shuffledSlots[(picture === this.slots.length-1) ? 0 : picture+1].preSprite(this.loader),2,this.app); \r\n        })\r\n    }\r\n    randomPicture() {\r\n        return Math.floor(Math.random() * (this.slots.length-1));\r\n    }\r\n}\r\n\r\nnew App();\n\n//# sourceURL=webpack://webpack-demo/./src/app.js?");

/***/ }),

/***/ "./src/elements/button.js":
/*!********************************!*\
  !*** ./src/elements/button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\nclass Start {\r\n    constructor() {\r\n        this.container = new PIXI.Container();\r\n        this.basicText = new PIXI.Text('Basic text in pixi');\r\n        this.basicText.x = 50;\r\n        this.basicText.y = 100;\r\n\r\n        this.style = new PIXI.TextStyle({\r\n            fontFamily: 'Arial',\r\n            fontSize: 36,\r\n            fontStyle: 'italic',\r\n            fontWeight: 'bold',\r\n            fill: ['#ffffff', '#00ff99'],\r\n            stroke: '#4a1850',\r\n            strokeThickness: 5,\r\n            dropShadow: true,\r\n            dropShadowColor: '#000000',\r\n            dropShadowBlur: 4,\r\n            dropShadowAngle: Math.PI / 6,\r\n            dropShadowDistance: 6,\r\n            wordWrap: true,\r\n            wordWrapWidth: 440,\r\n            lineJoin: 'round',\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/button.js?");

/***/ }),

/***/ "./src/elements/slot.js":
/*!******************************!*\
  !*** ./src/elements/slot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slot)\n/* harmony export */ });\nclass Slot {\r\n    constructor(name) {\r\n        this._name = name;\r\n    }\r\n\r\n    preSprite(loader) {\r\n        return new PIXI.Sprite(\r\n            loader.resources[\"../src/assets/symbols/\" + this._name + \".png\"].texture\r\n        );\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/slot.js?");

/***/ }),

/***/ "./src/elements/wheel.js":
/*!*******************************!*\
  !*** ./src/elements/wheel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wheel)\n/* harmony export */ });\nclass Wheel {\r\n    constructor(x) {\r\n        this.x = x;\r\n    }\r\n\r\n    draw(sprite, position, app) {\r\n        sprite.y = position*150;\r\n        sprite.x = this.x*150;\r\n        app.stage.addChild(sprite);\r\n        sprite.width=150;\r\n        sprite.height=150;\r\n    }\r\n\r\n    shuffleArray(array) {\r\n        return array.sort(() => Math.random() - 0.5);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/elements/wheel.js?");

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