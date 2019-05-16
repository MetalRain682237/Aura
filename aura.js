/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/aura.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aura.js":
/*!*********************!*\
  !*** ./src/aura.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/constants */ "./src/game/constants.js");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game */ "./src/game/game.js");



document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.querySelector("#aura-canvas");
  //540p
  canvas.width = _game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"];
  canvas.height = _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"];
  new _game_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas.getContext("2d"));
});

/***/ }),

/***/ "./src/game/canvas_util.js":
/*!*********************************!*\
  !*** ./src/game/canvas_util.js ***!
  \*********************************/
/*! exports provided: clear, animateLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateLine", function() { return animateLine; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");


const clear = (ctx)=>{
  ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].background;
  ctx.fillRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
};
const animateLine = (ctx, frame, duration, x, y, width)=>{
  ctx.beginPath();
  const percent = (frame % duration) / duration;
  const startOffset = (percent < 0.5) ? 0 : width * 2 * (percent - 0.5);
  const endOffset = (percent > 0.5) ? 0 : width - width * 2 * percent;
  ctx.moveTo(x + startOffset, y);
  ctx.lineTo(x + width - endOffset, y);
  ctx.stroke();
  ctx.closePath();
};

/***/ }),

/***/ "./src/game/constants.js":
/*!*******************************!*\
  !*** ./src/game/constants.js ***!
  \*******************************/
/*! exports provided: WIDTH, HEIGHT, COLORS, FONT, STATE, FPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT", function() { return FONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPS", function() { return FPS; });
const WIDTH = 960;
const HEIGHT = 540;
const COLORS = {
  background: "#000000",
  darkBlue: "#1c92d2",
  lightBlue: "#54EFEA"
};
const FONT = "Orbitron";

const STATE = {
  title: 1
};

const FPS = 60;

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");
/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas_util */ "./src/game/canvas_util.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./src/game/title.js");




class Game{
  constructor(ctx){
    this.ctx = ctx;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].title;
    this.frame = 0;
    this.nextFrame = this.nextFrame.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.requestId = requestAnimationFrame(this.nextFrame);
    document.addEventListener("keydown", this.handleKeydown);
  }

  nextFrame(time){
    const delta = this.time ? time - this.time : 0;
    this.time = time;
    this.frame+=delta / (1000/_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"]);
    Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["clear"])(this.ctx);
    switch(this.state){
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].title:
        Object(_title__WEBPACK_IMPORTED_MODULE_2__["titleScreen"])(this.ctx, this.frame);
        break;
      default:
        break;
    }


    this.requestId = requestAnimationFrame(this.nextFrame);
  }
  handleKeydown(e){
    switch (e.keyCode){
      case 13: //enter
        break;
      case 81: //q
        console.log("quit");
        cancelAnimationFrame(this.requestId);
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }
  

  

}

/***/ }),

/***/ "./src/game/title.js":
/*!***************************!*\
  !*** ./src/game/title.js ***!
  \***************************/
/*! exports provided: titleScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleScreen", function() { return titleScreen; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");
/* harmony import */ var _canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas_util */ "./src/game/canvas_util.js");



const titleScreen = (ctx, frame)=>{
  drawLogo(ctx);
  drawMenu(ctx, frame);
};

const drawLogo = (ctx)=>{
  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].lightBlue;
  ctx.textAlign = "center";
  ctx.font = "50px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("Aura", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/ 2, 60);
  ctx.closePath();
};

const drawMenu = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].lightBlue;
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].lightBlue;
  ctx.textAlign = "center";
  ctx.font = "30px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  const text = "Press ENTER to begin";
  ctx.fillText(text, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2 - width / 2;
  Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 210, width);
  Object(_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 170, width);
 
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1cmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvY2FudmFzX3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBaUQ7QUFDbEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBSztBQUN0QixrQkFBa0Isc0RBQU07QUFDeEIsTUFBTSxrREFBSTtBQUNWLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7O0FBRTdDO0FBQ1Asc0JBQXNCLGdEQUFLLEVBQUUsaURBQU07QUFDbkMsa0JBQWtCLGlEQUFNO0FBQ3hCLHFCQUFxQixnREFBSyxFQUFFLGlEQUFNO0FBQ2xDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFQTtBQUNQO0FBQ0E7O0FBRU8sZTs7Ozs7Ozs7Ozs7O0FDYlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNIO0FBQ0E7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixnREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhDQUFHO0FBQ2pDLElBQUksMERBQUs7QUFDVDtBQUNBLFdBQVcsZ0RBQUs7QUFDaEIsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLEM7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNYOztBQUVyQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFNO0FBQ3hCO0FBQ0EsdUJBQXVCLCtDQUFJO0FBQzNCLHVCQUF1QixnREFBSztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQU07QUFDMUIsa0JBQWtCLGlEQUFNO0FBQ3hCO0FBQ0EsdUJBQXVCLCtDQUFJO0FBQzNCO0FBQ0EscUJBQXFCLGdEQUFLO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUs7QUFDdEIsRUFBRSxnRUFBVyxlQUFlLDhDQUFHO0FBQy9CLEVBQUUsZ0VBQVcsZUFBZSw4Q0FBRzs7QUFFL0IsRSIsImZpbGUiOiJhdXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXVyYS5qc1wiKTtcbiIsImltcG9ydCB7IFdJRFRILCBIRUlHSFQgfSBmcm9tIFwiLi9nYW1lL2NvbnN0YW50c1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVyYS1jYW52YXNcIik7XG4gIC8vNTQwcFxuICBjYW52YXMud2lkdGggPSBXSURUSDtcbiAgY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbiAgbmV3IEdhbWUoY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSk7XG59KTsiLCJpbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDT0xPUlMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IGNsZWFyID0gKGN0eCk9PntcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SUy5iYWNrZ3JvdW5kO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG59O1xuZXhwb3J0IGNvbnN0IGFuaW1hdGVMaW5lID0gKGN0eCwgZnJhbWUsIGR1cmF0aW9uLCB4LCB5LCB3aWR0aCk9PntcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjb25zdCBwZXJjZW50ID0gKGZyYW1lICUgZHVyYXRpb24pIC8gZHVyYXRpb247XG4gIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gKHBlcmNlbnQgPCAwLjUpID8gMCA6IHdpZHRoICogMiAqIChwZXJjZW50IC0gMC41KTtcbiAgY29uc3QgZW5kT2Zmc2V0ID0gKHBlcmNlbnQgPiAwLjUpID8gMCA6IHdpZHRoIC0gd2lkdGggKiAyICogcGVyY2VudDtcbiAgY3R4Lm1vdmVUbyh4ICsgc3RhcnRPZmZzZXQsIHkpO1xuICBjdHgubGluZVRvKHggKyB3aWR0aCAtIGVuZE9mZnNldCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufTsiLCJleHBvcnQgY29uc3QgV0lEVEggPSA5NjA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNTQwO1xuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXG4gIGRhcmtCbHVlOiBcIiMxYzkyZDJcIixcbiAgbGlnaHRCbHVlOiBcIiM1NEVGRUFcIlxufTtcbmV4cG9ydCBjb25zdCBGT05UID0gXCJPcmJpdHJvblwiO1xuXG5leHBvcnQgY29uc3QgU1RBVEUgPSB7XG4gIHRpdGxlOiAxXG59O1xuXG5leHBvcnQgY29uc3QgRlBTID0gNjA7IiwiaW1wb3J0IHsgU1RBVEUsIEZQUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2xlYXIgfSBmcm9tIFwiLi9jYW52YXNfdXRpbFwiO1xuaW1wb3J0IHsgdGl0bGVTY3JlZW4gfSBmcm9tIFwiLi90aXRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURS50aXRsZTtcbiAgICB0aGlzLmZyYW1lID0gMDtcbiAgICB0aGlzLm5leHRGcmFtZSA9IHRoaXMubmV4dEZyYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVLZXlkb3duID0gdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5uZXh0RnJhbWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gIH1cblxuICBuZXh0RnJhbWUodGltZSl7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLnRpbWUgPyB0aW1lIC0gdGhpcy50aW1lIDogMDtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMuZnJhbWUrPWRlbHRhIC8gKDEwMDAvRlBTKTtcbiAgICBjbGVhcih0aGlzLmN0eCk7XG4gICAgc3dpdGNoKHRoaXMuc3RhdGUpe1xuICAgICAgY2FzZSBTVEFURS50aXRsZTpcbiAgICAgICAgdGl0bGVTY3JlZW4odGhpcy5jdHgsIHRoaXMuZnJhbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5uZXh0RnJhbWUpO1xuICB9XG4gIGhhbmRsZUtleWRvd24oZSl7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpe1xuICAgICAgY2FzZSAxMzogLy9lbnRlclxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODE6IC8vcVxuICAgICAgICBjb25zb2xlLmxvZyhcInF1aXRcIik7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG5cbiAgXG5cbn0iLCJpbXBvcnQgeyBDT0xPUlMsIEZPTlQsIFdJRFRILCBGUFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFuaW1hdGVMaW5lIH0gZnJvbSBcIi4vY2FudmFzX3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IHRpdGxlU2NyZWVuID0gKGN0eCwgZnJhbWUpPT57XG4gIGRyYXdMb2dvKGN0eCk7XG4gIGRyYXdNZW51KGN0eCwgZnJhbWUpO1xufTtcblxuY29uc3QgZHJhd0xvZ28gPSAoY3R4KT0+e1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBDT0xPUlMubGlnaHRCbHVlO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LmZvbnQgPSBcIjUwcHggXCIgKyBGT05UO1xuICBjdHguZmlsbFRleHQoXCJBdXJhXCIsIFdJRFRILyAyLCA2MCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmNvbnN0IGRyYXdNZW51ID0gKGN0eCwgZnJhbWUpPT57XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JTLmxpZ2h0Qmx1ZTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SUy5saWdodEJsdWU7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHguZm9udCA9IFwiMzBweCBcIiArIEZPTlQ7XG4gIGNvbnN0IHRleHQgPSBcIlByZXNzIEVOVEVSIHRvIGJlZ2luXCI7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBXSURUSC8yLCAyMDApO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICBjb25zdCBzdGFydFggPSBXSURUSCAvIDIgLSB3aWR0aCAvIDI7XG4gIGFuaW1hdGVMaW5lKGN0eCwgZnJhbWUsIDIqRlBTLCBzdGFydFgsIDIxMCwgd2lkdGgpO1xuICBhbmltYXRlTGluZShjdHgsIGZyYW1lLCAyKkZQUywgc3RhcnRYLCAxNzAsIHdpZHRoKTtcbiBcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==