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

/***/ "./src/game/constants.js":
/*!*******************************!*\
  !*** ./src/game/constants.js ***!
  \*******************************/
/*! exports provided: WIDTH, HEIGHT, PADDING, BACKGROUND_TILE_SIZE, MOSAIC_SIZE, CANVAS, COLOR, FONT, STATE, FPS, SPRITE_DURATION, MOVE_SPEED, DIRECTION, KEY, IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDING", function() { return PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TILE_SIZE", function() { return BACKGROUND_TILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOSAIC_SIZE", function() { return MOSAIC_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS", function() { return CANVAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT", function() { return FONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPS", function() { return FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_DURATION", function() { return SPRITE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_SPEED", function() { return MOVE_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
const WIDTH = 1280;
const HEIGHT = 720;
const PADDING = 10;
const BACKGROUND_TILE_SIZE = 400;
const MOSAIC_SIZE = 50;
const CANVAS = {
  position: [PADDING,PADDING],
  width: WIDTH - 2*PADDING,
  height: HEIGHT - 2*PADDING,
  center: [WIDTH/2, HEIGHT/2],
  collidable: true
};

const COLOR = {
  BACKGROUND: "#000000",
  DARK_BLUE: "#1c92d2",
  LIGHT_BLUE: "#54EFEA",
  RED: "#FF1234",
  WHITE: "#FFFFFF"
};
const FONT = "Orbitron";

const STATE = {
  LOADING: 0,
  TITLE: 1,
  PLAYING: 2,
  PAUSED: 3,
  GAME_OVER: 4
};

const FPS = 60;
const SPRITE_DURATION = FPS/4;
const MOVE_SPEED = 1.5;

const DIRECTION = {
  N: [0, -1],
  NE: [1, -1],
  E: [1, 0],
  SE: [1, 1],
  S: [0, 1],
  SW: [-1, 1],
  W: [-1, 0],
  NW: [-1, -1],
  STATIONARY: [0,0]
};

const KEY = {
  ENTER: 13,
  P: 80,
  UP: 38,
  W: 87,
  LEFT: 37,
  A: 65,
  DOWN: 40,
  S: 83,
  RIGHT: 39,
  D: 68,
  SPACE: 32,
  Q: 81
};

const IMAGES = {
  BACKGROUND: null,
  PLAYER:{
    up: [],
    down: [],
    left: [],
    right: []
  }
};

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
/* harmony import */ var _objects_game_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/game_state */ "./src/objects/game_state.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./src/game/title.js");
/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_screen */ "./src/game/game_screen.js");
/* harmony import */ var _pause__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pause */ "./src/game/pause.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ "./src/game/loading.js");
/* harmony import */ var _util_game_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/game_util */ "./src/util/game_util.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game_over_screen */ "./src/game/game_over_screen.js");









class Game{
  constructor(ctx){
    this.keyDown = {};
    this.ctx = ctx;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].LOADING;
    this.frame = 0;
    this.nextFrame = this.nextFrame.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.requestId = requestAnimationFrame(this.nextFrame);
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
    Object(_util_game_util__WEBPACK_IMPORTED_MODULE_6__["loadImages"])(()=>this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].TITLE);
  }

  nextFrame(time){
    const delta = this.time ? (time - this.time) / (1000/_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"]) : 0; //how many frames did we advance
    this.time = time;
    this.frame+=delta;
    switch(this.state){
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].LOADING:
        Object(_loading__WEBPACK_IMPORTED_MODULE_5__["loadingScreen"])(this.ctx, this.frame);
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].TITLE:
        Object(_title__WEBPACK_IMPORTED_MODULE_2__["titleScreen"])(this.ctx, this.frame);
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PAUSED:
        Object(_game_screen__WEBPACK_IMPORTED_MODULE_3__["gameScreen"])(this.ctx, this.frame, this.game);
        Object(_pause__WEBPACK_IMPORTED_MODULE_4__["pauseScreen"])(this.ctx, this.frame);
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING:
        this.game.update(delta, this.keyDown);
        Object(_game_screen__WEBPACK_IMPORTED_MODULE_3__["gameScreen"])(this.ctx, this.frame, this.game);
        if(this.game.player.dead){
          this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].GAME_OVER;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].GAME_OVER:
        Object(_game_screen__WEBPACK_IMPORTED_MODULE_3__["gameScreen"])(this.ctx, this.frame, this.game);
        Object(_game_over_screen__WEBPACK_IMPORTED_MODULE_7__["gameOverScreen"])(this.ctx, this.frame);
        break;
      default:
        break;
    }
    this.requestId = requestAnimationFrame(this.nextFrame);
  }
  handleKeydown(e){
    if (e.repeat || this.keyDown[e.keyCode]) return;
    switch (e.keyCode){
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].ENTER: //enter
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].TITLE || this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].GAME_OVER){
          this.game = new _objects_game_state__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].SPACE:
        console.log(this.game.player.position.join(","));
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].P: //p
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING){
          this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PAUSED;
          this.game.setPlayerVelocity(_constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"].STATIONARY.slice());
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = false;
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = false;
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = false;
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = false;
        }else if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PAUSED){
          this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].Q: //q
        console.log("quit");
        cancelAnimationFrame(this.requestId);
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING){ 
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = true;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING){
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = true;
        } 
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT:
        if (this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING) {
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = true;
        } 
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT:
        if (this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING) {
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = true;
        } 
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }
  handleKeyup(e){
    if(!this.keyDown[e.keyCode]) return;
    switch(e.keyCode){
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING) {
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = false;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING) {
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = false;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING) {
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = false;
        }
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT:
        if(this.state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE"].PLAYING){
          this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = false;
        }
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }
  

  

}

/***/ }),

/***/ "./src/game/game_over_screen.js":
/*!**************************************!*\
  !*** ./src/game/game_over_screen.js ***!
  \**************************************/
/*! exports provided: gameOverScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverScreen", function() { return gameOverScreen; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");
/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/canvas_util */ "./src/util/canvas_util.js");
/* harmony import */ var _util_game_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/game_util */ "./src/util/game_util.js");




const gameOverScreen = (ctx, frame) => {
  drawOverlay(ctx, frame);
  drawGameOver(ctx, frame);
  drawPlayAgain(ctx);
};

const drawOverlay = (ctx, frame)=>{
  const animationPosition = Object(_util_game_util__WEBPACK_IMPORTED_MODULE_2__["random"])(Math.floor(frame / (3.75*_constants__WEBPACK_IMPORTED_MODULE_0__["SPRITE_DURATION"])));
  let tile = animationPosition;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  for(let x = 0; x * _constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"] < _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]; x++ ){
    for(let y = 0; y * _constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"] < _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]; y++){
      tile=Object(_util_game_util__WEBPACK_IMPORTED_MODULE_2__["random"])(tile);
      const alpha = 0.01 + (0.3 * Object(_util_game_util__WEBPACK_IMPORTED_MODULE_2__["random"])(tile));
      ctx.fillStyle = Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"])(_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE, alpha);
      ctx.fillRect(x*_constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"], y*_constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_0__["MOSAIC_SIZE"]);
    }
  }
  ctx.closePath();
};
const drawGameOver = (ctx, frame) => {
  ctx.beginPath();
  ctx.fillStyle = Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"])(_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].BACKGROUND, 0.7);
  ctx.fillRect(0,150,_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], 190);
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].RED;
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].RED;
  ctx.textAlign = "center";
  ctx.font = "60px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].RED;
  ctx.shadowBlur = 5 + (2 * (Math.sin(frame * 2 / _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"]) + 1));
  const text = "YOU DIED";
  ctx.fillText(text, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2, 220);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2 - width / 2;
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX + width, 172, -width);
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 226, width);
};

const drawPlayAgain = (ctx) =>{
  ctx.beginPath();
  ctx.font = "30px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("Press ENTER to restart", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/2, 320);
  ctx.closePath();

};

/***/ }),

/***/ "./src/game/game_screen.js":
/*!*********************************!*\
  !*** ./src/game/game_screen.js ***!
  \*********************************/
/*! exports provided: gameScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameScreen", function() { return gameScreen; });
/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/canvas_util */ "./src/util/canvas_util.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");



const gameScreen = (ctx, frame, game)=>{
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_0__["clear"])(ctx);
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_0__["drawBackground"])(ctx);
  drawBorder(ctx, frame);
  drawGameState(ctx, frame, game);
};

const drawGameState = (ctx, frame, game)=>{
  game.draw(ctx, frame);
};

const drawBorder = (ctx, frame)=>{
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 5 + (2*(Math.sin(frame * 2 / _constants__WEBPACK_IMPORTED_MODULE_1__["FPS"])+1));
  

  ctx.beginPath();
  ctx.moveTo(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"],_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.lineTo(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"]-_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]/2;
  ctx.stroke();
  ctx.closePath();
  

  ctx.beginPath();
  ctx.moveTo(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.lineTo(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"]-_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"]-_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]/2;
  ctx.stroke();
  ctx.closePath();

  

  ctx.beginPath();
  ctx.moveTo(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.lineTo(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"]-_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]/2;
  ctx.stroke();
  ctx.closePath();

  
  ctx.beginPath();
  ctx.moveTo(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.lineTo(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.lineWidth = _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]/2;
  ctx.stroke();
  ctx.closePath();

  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.moveTo(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"]);
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.arc(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.arc(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.arc(_constants__WEBPACK_IMPORTED_MODULE_1__["WIDTH"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
  ctx.arc(_constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["HEIGHT"] - _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], _constants__WEBPACK_IMPORTED_MODULE_1__["PADDING"], 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

};

/***/ }),

/***/ "./src/game/loading.js":
/*!*****************************!*\
  !*** ./src/game/loading.js ***!
  \*****************************/
/*! exports provided: loadingScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingScreen", function() { return loadingScreen; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");
/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/canvas_util */ "./src/util/canvas_util.js");



const loadingScreen = (ctx, frame)=>{
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["clear"])(ctx);
  drawLogo(ctx);
  drawLoading(ctx, frame);
};

const drawLogo = (ctx) => {
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 5;
  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "50px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("Aura", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2, 60);
  ctx.closePath();
};

const drawLoading = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "30px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  const text = "LOADING...";
  ctx.fillText(text, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2 - width / 2;
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 210, width);
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 170, width);
 
};

/***/ }),

/***/ "./src/game/pause.js":
/*!***************************!*\
  !*** ./src/game/pause.js ***!
  \***************************/
/*! exports provided: pauseScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseScreen", function() { return pauseScreen; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/game/constants.js");
/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/canvas_util */ "./src/util/canvas_util.js");




const pauseScreen = (ctx, frame) => {
  drawPause(ctx, frame);
};

const drawPause = (ctx, frame) => {
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.beginPath();
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "50px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  const text = "PAUSED";
  const width = ctx.measureText(text).width;
  const startX = _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2 - width / 2;
  
  ctx.shadowBlur = 0;
  ctx.fillStyle = Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"])(_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].BACKGROUND, 0.7);
  ctx.fillRect(3*_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]/2 - 2, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]/2 - 50, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]-(3*_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"])+4, 65);
  ctx.shadowBlur = 5 + (2 * (Math.sin(frame * 2 / _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"]) + 1));
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.fillText(text, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]/2);
  ctx.closePath();
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]/2 + 7, width, 2);
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2 * _constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]/2 - 42, width, 2);

};

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
/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/canvas_util */ "./src/util/canvas_util.js");



const titleScreen = (ctx, frame)=>{
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["clear"])(ctx);
  drawLogo(ctx);
  drawMenu(ctx, frame);
};

const drawLogo = (ctx)=>{
  ctx.beginPath();
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 10;
  ctx.font = "50px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("AURA", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/ 2, 60);
  ctx.closePath();
};

const drawMenu = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "30px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  const text = "Press ENTER to begin";
  ctx.shadowColor = _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 10;
  ctx.fillText(text, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] / 2 - width / 2;
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 210, width);
  Object(_util_canvas_util__WEBPACK_IMPORTED_MODULE_1__["animateLine"])(ctx, frame, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["FPS"], startX, 170, width);

  ctx.beginPath();
  ctx.textAlign = "left";
  ctx.fillText("Controls:", startX, 300);
  ctx.font = "20px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("- Arrows to MOVE", startX + 20, 340);
  ctx.fillText("- WASD to SHOOT", startX + 20, 370);
  ctx.fillText("- P to PAUSE", startX + 20, 400);
  ctx.font = "30px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("Rules:", startX, 460);
  ctx.font = "20px " + _constants__WEBPACK_IMPORTED_MODULE_0__["FONT"];
  ctx.fillText("- Kill all the things", startX + 20, 500);
  ctx.fillText("- Don't get hit", startX + 20, 530);
  ctx.fillText("- Don't get touch the lasers", startX + 20, 560);
  ctx.closePath();
};

/***/ }),

/***/ "./src/objects/deadly_object.js":
/*!**************************************!*\
  !*** ./src/objects/deadly_object.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeadlyObject; });
/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_object */ "./src/objects/game_object.js");
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");



class DeadlyObject extends _game_object__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(options){
    options.color = options.color || _game_constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].RED;
    super(options);
    this.deadly = true;
  }
}

/***/ }),

/***/ "./src/objects/game_object.js":
/*!************************************!*\
  !*** ./src/objects/game_object.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
/* harmony import */ var _util_game_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/game_util */ "./src/util/game_util.js");
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");



class GameObject{
  constructor(options){
    this.position = options.position || [0,0];
    this.velocity = options.velocity || _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].STATIONARY.slice();
    this.facing = options.facing || _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S.slice();
    this.width = options.width || 10;
    this.height = options.height || 10;
    this.color = options.color || _game_constants__WEBPACK_IMPORTED_MODULE_1__["COLOR"].LIGHT_BLUE;
    this.collidable = options.collidable || true;
    this.moveSpeed = options.moveSpeed || _game_constants__WEBPACK_IMPORTED_MODULE_1__["MOVE_SPEED"];
    this.killable = false;
    this.grace = options.grace || [[0, 0], [0, 0]]; //grace pixels in each direction for hitbox
                                                    //[[startx, endx], [starty, endy]]
  }

  draw(ctx, frame){
    ctx.beginPath();
    ctx.moveTo(...this.position);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5 + (2 * (Math.sin(frame * 2 / _game_constants__WEBPACK_IMPORTED_MODULE_1__["FPS"]) + 1));
    ctx.fillRect(...this.position, this.width, this.height);
    ctx.closePath();
  }
  drawImage(ctx, img){
    ctx.beginPath();
    ctx.moveTo(...this.position);
    ctx.shadowBlur = 0;
    ctx.drawImage(img, ...this.position, this.width, this.height);
    ctx.closePath();
  }

  nextPosition(delta){
    const scaledVelocity = Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(this.velocity, delta), this.moveSpeed);
    return [this.position[0] + scaledVelocity[0], this.position[1] + scaledVelocity[1]];
  }
  nextPositionAsObject(delta){
    return {position: this.nextPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace};
  }
  moveToNextPosition(delta){
    if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].STATIONARY.join(",")){
      //leave facing direction alone
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].N.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S.join(",")){
      this.facing = this.velocity.slice();
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NW.join(",")){
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W;
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NE.join(",")){
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E;
    }else{
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S;
    }
    this.position = this.nextPosition(delta);
  }

  nextXPosition(delta){
    const scaledVelocity = Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(this.velocity, delta), this.moveSpeed);
    return [this.position[0] + scaledVelocity[0], this.position[1]];
  }
  nextXPositionAsObject(delta){
    return {position: this.nextXPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace};
  }
  moveToNextXPosition(delta){
    if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].STATIONARY.join(",")){
      //leave facing direction alone
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].N.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S.join(",")){
      this.facing = this.velocity.slice();
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NW.join(",")){
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W;
    }else if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NE.join(",")){
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E;
    }else{
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S;
    }
    this.position = this.nextXPosition(delta);
  }

  nextYPosition(delta) {
    const scaledVelocity = Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(Object(_util_game_util__WEBPACK_IMPORTED_MODULE_0__["scaleVector"])(this.velocity, delta), this.moveSpeed);
    return [this.position[0], this.position[1] + scaledVelocity[1]];
  }
  nextYPositionAsObject(delta) {
    return { position: this.nextYPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace };
  }
  moveToNextYPosition(delta) {
    if (this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].STATIONARY.join(",")) {
      //leave facing direction alone
    } else if (this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].N.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E.join(",") || this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S.join(",")) {
      this.facing = this.velocity.slice();
    } else if (this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NW.join(",")) {
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W;
    } else if (this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NE.join(",")) {
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E;
    } else {
      this.facing = _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S;
    }
    this.position = this.nextYPosition(delta);
  }

  addVelocity(direction){
    this.velocity[0] += direction[0];
    this.velocity[1] += direction[1];
  }
  removeVelocity(direction){
    this.velocity[0] -= direction[0];
    this.velocity[1] -= direction[1];
  }
  setVelocity(direction){
    this.velocity[0] = direction[0];
    this.velocity[1] = direction[1];
  }
}

/***/ }),

/***/ "./src/objects/game_state.js":
/*!***********************************!*\
  !*** ./src/objects/game_state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameState; });
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");
/* harmony import */ var _util_game_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/game_util */ "./src/util/game_util.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/objects/player.js");
/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_object */ "./src/objects/game_object.js");
/* harmony import */ var _deadly_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deadly_object */ "./src/objects/deadly_object.js");






class GameState{
  constructor(){
    this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: [_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]/2 - _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"], _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]/2 - _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]],
      velocity: _game_constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"].STATIONARY.slice(),
      facing: _game_constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"].S,
      width: 28,
      height: 46,
      grace: [[5,5],[5,5]]
    });
    this.obstacles = [
      new _game_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
        position: [570, 197],
        velocity: [0,0],
        width: 3,
        height: 111
      }),
      new _game_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
        position: [700, 197],
        velocity: [0,0],
        width: 3,
        height: 111
      }),
      new _game_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
        position: [424, 308],
        velocity: [0,0],
        width: 149,
        height: 3
      }),
      new _game_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
        position: [424, 458],
        velocity: [0,0],
        width: 426,
        height: 3
      }),

      new _game_object__WEBPACK_IMPORTED_MODULE_3__["default"]({
        position: [700, 308],
        velocity: [0,0],
        width: 148,
        height: 3
      }),
      
      new _deadly_object__WEBPACK_IMPORTED_MODULE_4__["default"]({
        position: [849, 308],
        velocity: [0,0],
        width: 3,
        height: 153,
        grace: [[3,3],[0,0]]
      }),
      
    ];
  }
  update(delta, keydown){
    this.player.setVelocity(Object(_util_game_util__WEBPACK_IMPORTED_MODULE_1__["directionForKeys"])(keydown));
    const nextPosition = this.player.nextPositionAsObject(delta);
    if(this.checkCollisions(nextPosition)){
      this.player.moveToNextPosition(delta);
    }
    else{
      if(nextPosition.dead){
        this.player.die();
        keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = false;
        keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = false;
        keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = false;
        keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = false;
        this.player.position = nextPosition.position;
      }else{
        if(this.player.velocity[0] !== 0 && this.player.velocity[1] !== 0){
          const xMove = this.player.nextXPositionAsObject(delta);
          if(this.checkCollisions(xMove)) {
            this.player.moveToNextXPosition(delta);
          }else if(xMove.dead){
            this.player.die();
            keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = false;
            keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = false;
            keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = false;
            keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = false;
            this.player.position = xMove.position;
          }else{
            const yMove = this.player.nextYPositionAsObject(delta);
            if (this.checkCollisions(yMove)){
              this.player.moveToNextYPosition(delta);
            }else if(yMove.dead){
              this.player.die();
              keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP] = false;
              keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT] = false;
              keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT] = false;
              keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN] = false;
              this.player.position = yMove.position;
            }else{
              this.stopPlayer(keydown);
            }
          }
        }else{
          this.stopPlayer(keydown);
        }
        
      }
    }
  }
  stopPlayer(keydown){
    this.setPlayerVelocity(_game_constants__WEBPACK_IMPORTED_MODULE_0__["DIRECTION"].STATIONARY.slice());
  }
  checkCollisions(object){
    if(!Object(_util_game_util__WEBPACK_IMPORTED_MODULE_1__["checkBounds"])(object)){
      return false;
    }
    for(let i = 0; i < this.obstacles.length; ++i){
      if(Object(_util_game_util__WEBPACK_IMPORTED_MODULE_1__["boxCollision"])(this.obstacles[i], object)){
        if(this.obstacles[i].deadly && object.killable){
          object.dead = true;
        }
        return false;
      } 
    }
    return true;
  }
  draw(ctx, frame){
    this.player.draw(ctx, frame);
    this.obstacles.forEach(obstacle=>obstacle.draw(ctx, frame));
  }
  addPlayerVelocity(direction){
    this.player.addVelocity(direction);
  }
  removePlayerVelocity(direction){
    this.player.removeVelocity(direction);
  }
  setPlayerVelocity(direction){
    this.player.setVelocity(direction);
  }
}

/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_object */ "./src/objects/game_object.js");
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");



class Player extends _game_object__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(options){
    super(options);
    this.images = _game_constants__WEBPACK_IMPORTED_MODULE_1__["IMAGES"].PLAYER;
    this.killable = true;
  }
  draw(ctx, frame){
    
    //figure out what image to key into
    let imgDirection;
    switch(this.facing.join(",")){
      case _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].N.join(","):
        imgDirection = "up";
        break;
      case _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].E.join(","):
        imgDirection = "right";
        break;
      case _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].W.join(","):
        imgDirection = "left";
        break;
      case _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].S.join(","):
        imgDirection = "down";
        break;
      default:
        imgDirection = "down";
        break;
    }

    let imgNumber;
    switch (Math.floor(frame / _game_constants__WEBPACK_IMPORTED_MODULE_1__["SPRITE_DURATION"]) % 4) {
      case 0:
        imgNumber = 0;
        break;
      case 1:
        imgNumber = 1;
        break;
      case 2:
        imgNumber = 2;
        break;
      case 3:
        imgNumber = 1;
        break;
      default:
        imgNumber = 0;
        break;
    }
    if(this.velocity.join(",") === _game_constants__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].STATIONARY.join(","))
      imgNumber = 1;

    const img = this.images[imgDirection][imgNumber];

    super.drawImage(ctx, img);
  }

  die(){
    this.dead = true;
    this.position = [-1, -1];
    this.velocity = [0, 0];
  }
  
}

/***/ }),

/***/ "./src/util/canvas_util.js":
/*!*********************************!*\
  !*** ./src/util/canvas_util.js ***!
  \*********************************/
/*! exports provided: clear, animateLine, drawBackground, hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateLine", function() { return animateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBackground", function() { return drawBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");


const clear = (ctx)=>{
  ctx.clearRect(0, 0, _game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.fillStyle = _game_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].BACKGROUND;
  ctx.fillRect(0, 0, _game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
};
const animateLine = (ctx, frame, duration, x, y, width, lineWidth = 1)=>{
  ctx.beginPath();
  const percent = (frame % duration) / duration;
  const startOffset = (percent < 0.5) ? 0 : width * 2 * (percent - 0.5);
  const endOffset = (percent > 0.5) ? 0 : width - width * 2 * percent;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x + startOffset, y);
  ctx.lineTo(x + width - endOffset, y);
  ctx.stroke();
  ctx.closePath();
};

const drawBackground = (ctx) => {
  ctx.shadowColor = _game_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 0;
  for(let x = 0; x*_game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"] <= _game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]; x++){
    for(let y = 0; y*_game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"] <= _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]; y++){
      ctx.drawImage(_game_constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].BACKGROUND, x*_game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"], y*_game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"], _game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"], _game_constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TILE_SIZE"]);
    }
  }
  clearPadding(ctx);
};

const clearPadding = (ctx)=>{
  ctx.clearRect(0,0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.clearRect(0,0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]);
  ctx.clearRect(_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]-_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.clearRect(0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]-_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]);
  
  ctx.fillStyle = _game_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].BACKGROUND;
  ctx.shadowColor = _game_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].LIGHT_BLUE;
  ctx.shadowBlur = 0;
  ctx.fillRect(0,0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.fillRect(0,0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]);
  ctx.fillRect(_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"]-_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]);
  ctx.fillRect(0,_game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]-_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"],_game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]);
};

//https://stackoverflow.com/a/28056903
const hexToRGB = (hex, alpha)=>{
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

/***/ }),

/***/ "./src/util/game_util.js":
/*!*******************************!*\
  !*** ./src/util/game_util.js ***!
  \*******************************/
/*! exports provided: loadImages, scaleVector, boxCollision, checkBounds, random, directionForKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImages", function() { return loadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleVector", function() { return scaleVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxCollision", function() { return boxCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBounds", function() { return checkBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionForKeys", function() { return directionForKeys; });
/* harmony import */ var _game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/constants */ "./src/game/constants.js");


//preload images for drawing, callback when completed
const loadImages = (callback)=>{
    let count = 0; //how many images have loaded?
    let total = 0;
    {
      total += 1;
      let img = new Image();
      img.onload = loaded;
      img.src = `images/background-pattern.png`;
      _game_constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].BACKGROUND = img;
    }

    const directions = ["up", "down", "left", "right"];
    directions.forEach(direction=>{
      for(let i = 1; i <= 3; ++i ){
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `images/sprite/${direction}_${i}.png`;
        _game_constants__WEBPACK_IMPORTED_MODULE_0__["IMAGES"].PLAYER[direction].push(img);
      }
    });

    //gets called when an image gets loaded
    function loaded() {
      count++;
      if (count >= total) {
        //execute callback when all images have successfully loaded
        callback();
      }
    }
  };

  const scaleVector = (vector, delta)=>{
    return [vector[0] * delta, vector[1] * delta];
  };

  const boxCollision = (object1, object2)=>{
    if (!object1.collidable) return false;
    if (!object2.collidable) return false;
    const [startX, startY] = object1.position;
    const [otherStartX, otherStartY] = object2.position;
    const [endX, endY] = [startX + object1.width, startY + object1.height];
    const [otherEndX, otherEndY] = [otherStartX + object2.width, otherStartY + object2.height];

    return (startX + object1.grace[0][0] <= otherEndX-object2.grace[0][1] &&
      endX - object1.grace[0][1] >= otherStartX + object2.grace[0][0] &&
      startY + object1.grace[1][0] <= otherEndY - object2.grace[1][1] &&
      endY - object1.grace[1][1] >= otherStartY + object2.grace[1][0]);
  };

  const checkBounds = (object)=>{
    return !(object.position[0] + object.grace[0][0] < _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"]  || object.position[0] + object.width - object.grace[0][1] > _game_constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] - _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"] ||
      object.position[1] + object.grace[1][0] < _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"] || object.position[1] + object.height - object.grace[1][1] > _game_constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"] - _game_constants__WEBPACK_IMPORTED_MODULE_0__["PADDING"])
  };

//https://stackoverflow.com/a/19303725
const random = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const directionForKeys = (keydown) =>{
  const velocity = [0,0];
  if(keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP]){
    velocity[1]-=1;
  }
  if(keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].DOWN]){
    velocity[1]+=1;
  }
  if(keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT]){
    velocity[0]-=1;
  }
  if(keydown[_game_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT]){
    velocity[0]+=1;
  }
  return velocity;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1cmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvZ2FtZV9vdmVyX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lX3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3BhdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2RlYWRseV9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ2FtZV9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ2FtZV9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY2FudmFzX3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2FtZV91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWlEO0FBQ2xCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQUs7QUFDdEIsa0JBQWtCLHNEQUFNO0FBQ3hCLE1BQU0sa0RBQUk7QUFDVixDQUFDLEU7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQ1g7QUFDVjtBQUNLO0FBQ0w7QUFDSTtBQUNPO0FBQ0s7O0FBRXJDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBVSxrQkFBa0IsZ0RBQUs7QUFDckM7O0FBRUE7QUFDQSx5REFBeUQsOENBQUcsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFLO0FBQ2hCLFFBQVEsOERBQWE7QUFDckI7QUFDQSxXQUFXLGdEQUFLO0FBQ2hCLFFBQVEsMERBQVc7QUFDbkI7QUFDQSxXQUFXLGdEQUFLO0FBQ2hCLFFBQVEsK0RBQVU7QUFDbEIsUUFBUSwwREFBVztBQUNuQjtBQUNBLFdBQVcsZ0RBQUs7QUFDaEI7QUFDQSxRQUFRLCtEQUFVO0FBQ2xCO0FBQ0EsdUJBQXVCLGdEQUFLO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLGdEQUFLO0FBQ2hCLFFBQVEsK0RBQVU7QUFDbEIsUUFBUSx3RUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFHO0FBQ2QsMEJBQTBCLGdEQUFLLHlCQUF5QixnREFBSztBQUM3RCwwQkFBMEIsMkRBQVM7QUFDbkMsdUJBQXVCLGdEQUFLO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLDhDQUFHO0FBQ2Q7QUFDQTtBQUNBLFdBQVcsOENBQUc7QUFDZCwwQkFBMEIsZ0RBQUs7QUFDL0IsdUJBQXVCLGdEQUFLO0FBQzVCLHNDQUFzQyxvREFBUztBQUMvQyx1QkFBdUIsOENBQUc7QUFDMUIsdUJBQXVCLDhDQUFHO0FBQzFCLHVCQUF1Qiw4Q0FBRztBQUMxQix1QkFBdUIsOENBQUc7QUFDMUIsU0FBUyx1QkFBdUIsZ0RBQUs7QUFDckMsdUJBQXVCLGdEQUFLO0FBQzVCO0FBQ0E7QUFDQSxXQUFXLDhDQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBRztBQUNkLDBCQUEwQixnREFBSyxVO0FBQy9CLHVCQUF1Qiw4Q0FBRztBQUMxQjtBQUNBO0FBQ0EsV0FBVyw4Q0FBRztBQUNkLDBCQUEwQixnREFBSztBQUMvQix1QkFBdUIsOENBQUc7QUFDMUIsUztBQUNBO0FBQ0EsV0FBVyw4Q0FBRztBQUNkLDJCQUEyQixnREFBSztBQUNoQyx1QkFBdUIsOENBQUc7QUFDMUIsUztBQUNBO0FBQ0EsV0FBVyw4Q0FBRztBQUNkLDJCQUEyQixnREFBSztBQUNoQyx1QkFBdUIsOENBQUc7QUFDMUIsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOENBQUc7QUFDZCwwQkFBMEIsZ0RBQUs7QUFDL0IsdUJBQXVCLDhDQUFHO0FBQzFCO0FBQ0E7QUFDQSxXQUFXLDhDQUFHO0FBQ2QsMEJBQTBCLGdEQUFLO0FBQy9CLHVCQUF1Qiw4Q0FBRztBQUMxQjtBQUNBO0FBQ0EsV0FBVyw4Q0FBRztBQUNkLDBCQUEwQixnREFBSztBQUMvQix1QkFBdUIsOENBQUc7QUFDMUI7QUFDQTtBQUNBLFdBQVcsOENBQUc7QUFDZCwwQkFBMEIsZ0RBQUs7QUFDL0IsdUJBQXVCLDhDQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLEM7Ozs7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQ3pCO0FBQ3hCOztBQUVwQztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDhEQUFNLDBCQUEwQiwwREFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSyxzREFBVyxHQUFHLGdEQUFLLENBQUM7QUFDekMsa0JBQWtCLEtBQUssc0RBQVcsR0FBRyxpREFBTSxDQUFDO0FBQzVDLFdBQVcsOERBQU07QUFDakIsa0NBQWtDLDhEQUFNO0FBQ3hDLHNCQUFzQixrRUFBUSxDQUFDLGdEQUFLO0FBQ3BDLHFCQUFxQixzREFBVyxJQUFJLHNEQUFXLEVBQUUsc0RBQVcsRUFBRSxzREFBVztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQVEsQ0FBQyxnREFBSztBQUNoQyxxQkFBcUIsZ0RBQUs7QUFDMUIsb0JBQW9CLGdEQUFLO0FBQ3pCLGtCQUFrQixnREFBSztBQUN2QjtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQixvQkFBb0IsZ0RBQUs7QUFDekIsa0RBQWtELDhDQUFHO0FBQ3JEO0FBQ0EscUJBQXFCLGdEQUFLO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUs7QUFDdEIsRUFBRSxxRUFBVyxpQkFBaUIsOENBQUc7QUFDakMsRUFBRSxxRUFBVyxpQkFBaUIsOENBQUc7QUFDakM7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQix5Q0FBeUMsZ0RBQUs7QUFDOUM7O0FBRUEsRTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQ0s7O0FBRTFEO0FBQ1AsRUFBRSwrREFBSztBQUNQLEVBQUUsd0VBQWM7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnREFBSztBQUN6QixnREFBZ0QsOENBQUc7OztBQUduRDtBQUNBLGFBQWEsa0RBQU8sQ0FBQyxrREFBTztBQUM1QixhQUFhLGdEQUFLLENBQUMsa0RBQU8sRUFBRSxrREFBTztBQUNuQyxvQkFBb0IsZ0RBQUs7QUFDekIsa0JBQWtCLGtEQUFPO0FBQ3pCO0FBQ0E7OztBQUdBO0FBQ0EsYUFBYSxnREFBSyxHQUFHLGtEQUFPLEVBQUUsa0RBQU87QUFDckMsYUFBYSxnREFBSyxDQUFDLGtEQUFPLEVBQUUsaURBQU0sQ0FBQyxrREFBTztBQUMxQyxvQkFBb0IsZ0RBQUs7QUFDekIsa0JBQWtCLGtEQUFPO0FBQ3pCO0FBQ0E7Ozs7QUFJQTtBQUNBLGFBQWEsZ0RBQUssR0FBRyxrREFBTyxFQUFFLGlEQUFNLEdBQUcsa0RBQU87QUFDOUMsYUFBYSxrREFBTyxFQUFFLGlEQUFNLENBQUMsa0RBQU87QUFDcEMsb0JBQW9CLGdEQUFLO0FBQ3pCLGtCQUFrQixrREFBTztBQUN6QjtBQUNBOzs7QUFHQTtBQUNBLGFBQWEsa0RBQU8sRUFBRSxpREFBTSxHQUFHLGtEQUFPO0FBQ3RDLGFBQWEsa0RBQU8sRUFBRSxrREFBTztBQUM3QixvQkFBb0IsZ0RBQUs7QUFDekIsa0JBQWtCLGtEQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0RBQU8sRUFBRSxrREFBTztBQUM3QixrQkFBa0IsZ0RBQUs7QUFDdkIsVUFBVSxrREFBTyxFQUFFLGtEQUFPLEVBQUUsa0RBQU87QUFDbkM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnREFBSztBQUN2QixVQUFVLGdEQUFLLEdBQUcsa0RBQU8sRUFBRSxrREFBTyxFQUFFLGtEQUFPO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0RBQUs7QUFDdkIsVUFBVSxnREFBSyxHQUFHLGtEQUFPLEVBQUUsaURBQU0sR0FBRyxrREFBTyxFQUFFLGtEQUFPO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0RBQUs7QUFDdkIsVUFBVSxrREFBTyxFQUFFLGlEQUFNLEdBQUcsa0RBQU8sRUFBRSxrREFBTztBQUM1QztBQUNBOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNHOztBQUVsRDtBQUNQLEVBQUUsK0RBQUs7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0RBQUs7QUFDekI7QUFDQTtBQUNBLGtCQUFrQixnREFBSztBQUN2QjtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQix1QkFBdUIsZ0RBQUs7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFLO0FBQ3pCLGtCQUFrQixnREFBSztBQUN2QjtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQjtBQUNBLHFCQUFxQixnREFBSztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCLEVBQUUscUVBQVcsZUFBZSw4Q0FBRztBQUMvQixFQUFFLHFFQUFXLGVBQWUsOENBQUc7O0FBRS9CLEU7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNaOzs7QUFHcEQ7QUFDUDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdEQUFLO0FBQ3pCO0FBQ0Esb0JBQW9CLGdEQUFLO0FBQ3pCO0FBQ0EsdUJBQXVCLCtDQUFJO0FBQzNCO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUs7O0FBRXRCO0FBQ0Esa0JBQWtCLGtFQUFRLENBQUMsZ0RBQUs7QUFDaEMsaUJBQWlCLGtEQUFPLFFBQVEsaURBQU0sU0FBUyxnREFBSyxJQUFJLGtEQUFPO0FBQy9ELGtEQUFrRCw4Q0FBRztBQUNyRCxrQkFBa0IsZ0RBQUs7QUFDdkIscUJBQXFCLGdEQUFLLE1BQU0saURBQU07QUFDdEM7QUFDQSxFQUFFLHFFQUFXLGlCQUFpQiw4Q0FBRyxVQUFVLGlEQUFNO0FBQ2pELEVBQUUscUVBQVcsaUJBQWlCLDhDQUFHLFVBQVUsaURBQU07O0FBRWpELEU7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNHOztBQUVsRDtBQUNQLEVBQUUsK0RBQUs7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnREFBSztBQUN2QjtBQUNBLG9CQUFvQixnREFBSztBQUN6QjtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQix1QkFBdUIsZ0RBQUs7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFLO0FBQ3pCLGtCQUFrQixnREFBSztBQUN2QjtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQjtBQUNBLG9CQUFvQixnREFBSztBQUN6QjtBQUNBLHFCQUFxQixnREFBSztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCLEVBQUUscUVBQVcsZUFBZSw4Q0FBRztBQUMvQixFQUFFLHFFQUFXLGVBQWUsOENBQUc7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQUk7QUFDM0I7QUFDQSx1QkFBdUIsK0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRzs7QUFFM0IsMkJBQTJCLG9EQUFVO0FBQ3BEO0FBQ0EscUNBQXFDLHFEQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ3NCOztBQUV2RDtBQUNmO0FBQ0E7QUFDQSx3Q0FBd0MseURBQVM7QUFDakQsb0NBQW9DLHlEQUFTO0FBQzdDO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUs7QUFDdkM7QUFDQSwwQ0FBMEMsMERBQVU7QUFDcEQ7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1EQUFHO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1FQUFXLENBQUMsbUVBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQ0FBbUMseURBQVM7QUFDNUM7QUFDQSxLQUFLLG9DQUFvQyx5REFBUyw0Q0FBNEMseURBQVMsNENBQTRDLHlEQUFTLDRDQUE0Qyx5REFBUztBQUNqTjtBQUNBLEtBQUssb0NBQW9DLHlEQUFTO0FBQ2xELG9CQUFvQix5REFBUztBQUM3QixLQUFLLG9DQUFvQyx5REFBUztBQUNsRCxvQkFBb0IseURBQVM7QUFDN0IsS0FBSztBQUNMLG9CQUFvQix5REFBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUVBQVcsQ0FBQyxtRUFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG1DQUFtQyx5REFBUztBQUM1QztBQUNBLEtBQUssb0NBQW9DLHlEQUFTLDRDQUE0Qyx5REFBUyw0Q0FBNEMseURBQVMsNENBQTRDLHlEQUFTO0FBQ2pOO0FBQ0EsS0FBSyxvQ0FBb0MseURBQVM7QUFDbEQsb0JBQW9CLHlEQUFTO0FBQzdCLEtBQUssb0NBQW9DLHlEQUFTO0FBQ2xELG9CQUFvQix5REFBUztBQUM3QixLQUFLO0FBQ0wsb0JBQW9CLHlEQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixtRUFBVyxDQUFDLG1FQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0Esb0NBQW9DLHlEQUFTO0FBQzdDO0FBQ0EsS0FBSyxzQ0FBc0MseURBQVMsNENBQTRDLHlEQUFTLDRDQUE0Qyx5REFBUyw0Q0FBNEMseURBQVM7QUFDbk47QUFDQSxLQUFLLHNDQUFzQyx5REFBUztBQUNwRCxvQkFBb0IseURBQVM7QUFDN0IsS0FBSyxzQ0FBc0MseURBQVM7QUFDcEQsb0JBQW9CLHlEQUFTO0FBQzdCLEtBQUs7QUFDTCxvQkFBb0IseURBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUNIO0FBQ2xEO0FBQ1M7QUFDSTs7QUFFNUI7QUFDZjtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QixpQkFBaUIscURBQUssS0FBSyx1REFBTyxFQUFFLHNEQUFNLEtBQUssdURBQU87QUFDdEQsZ0JBQWdCLHlEQUFTO0FBQ3pCLGNBQWMseURBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsVUFBVSxvREFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxVQUFVLG9EQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFVBQVUsb0RBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsVUFBVSxvREFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsVUFBVSxvREFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsVUFBVSxzREFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0VBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFHO0FBQ25CLGdCQUFnQixtREFBRztBQUNuQixnQkFBZ0IsbURBQUc7QUFDbkIsZ0JBQWdCLG1EQUFHO0FBQ25CO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Esb0JBQW9CLG1EQUFHO0FBQ3ZCLG9CQUFvQixtREFBRztBQUN2QixvQkFBb0IsbURBQUc7QUFDdkIsb0JBQW9CLG1EQUFHO0FBQ3ZCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHNCQUFzQixtREFBRztBQUN6QixzQkFBc0IsbURBQUc7QUFDekIsc0JBQXNCLG1EQUFHO0FBQ3pCLHNCQUFzQixtREFBRztBQUN6QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5REFBUztBQUNwQztBQUNBO0FBQ0EsUUFBUSxtRUFBVztBQUNuQjtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QyxTQUFTLG9FQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ2dDOztBQUV4RCxxQkFBcUIsb0RBQVU7QUFDOUM7QUFDQTtBQUNBLGtCQUFrQixzREFBTTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5REFBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyx5REFBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyx5REFBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyx5REFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsK0RBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseURBQVM7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7O0FBRXpGO0FBQ1Asc0JBQXNCLHFEQUFLLEVBQUUsc0RBQU07QUFDbkMsa0JBQWtCLHFEQUFLO0FBQ3ZCLHFCQUFxQixxREFBSyxFQUFFLHNEQUFNO0FBQ2xDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixxREFBSztBQUN6QjtBQUNBLGdCQUFnQixHQUFHLG9FQUFvQixJQUFJLHFEQUFLLENBQUM7QUFDakQsa0JBQWtCLEdBQUcsb0VBQW9CLElBQUksc0RBQU0sQ0FBQztBQUNwRCxvQkFBb0Isc0RBQU0sZUFBZSxvRUFBb0IsSUFBSSxvRUFBb0IsRUFBRSxvRUFBb0IsRUFBRSxvRUFBb0I7QUFDakk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdURBQU8sQ0FBQyxzREFBTTtBQUNsQyxvQkFBb0IscURBQUssQ0FBQyx1REFBTztBQUNqQyxnQkFBZ0IscURBQUssQ0FBQyx1REFBTyxHQUFHLHVEQUFPLENBQUMsc0RBQU07QUFDOUMsa0JBQWtCLHNEQUFNLENBQUMsdURBQU8sQ0FBQyxxREFBSyxDQUFDLHVEQUFPOztBQUU5QyxrQkFBa0IscURBQUs7QUFDdkIsb0JBQW9CLHFEQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLHVEQUFPLENBQUMsc0RBQU07QUFDakMsbUJBQW1CLHFEQUFLLENBQUMsdURBQU87QUFDaEMsZUFBZSxxREFBSyxDQUFDLHVEQUFPLEdBQUcsdURBQU8sQ0FBQyxzREFBTTtBQUM3QyxpQkFBaUIsc0RBQU0sQ0FBQyx1REFBTyxDQUFDLHFEQUFLLENBQUMsdURBQU87QUFDN0M7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRjs7QUFFakY7QUFDTztBQUNQLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFNO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLEdBQUcsRUFBRTtBQUNsRCxRQUFRLHNEQUFNO0FBQ2Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFTO0FBQ1Q7QUFDQTs7QUFFQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBUztBQUNULHVEQUF1RCx1REFBTyw4REFBOEQscURBQUssR0FBRyx1REFBTztBQUMzSSxnREFBZ0QsdURBQU8sOERBQThELHNEQUFNLEdBQUcsdURBQU87QUFDckk7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsYUFBYSxtREFBRztBQUNoQjtBQUNBO0FBQ0EsYUFBYSxtREFBRztBQUNoQjtBQUNBO0FBQ0EsYUFBYSxtREFBRztBQUNoQjtBQUNBO0FBQ0EsYUFBYSxtREFBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImF1cmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hdXJhLmpzXCIpO1xuIiwiaW1wb3J0IHsgV0lEVEgsIEhFSUdIVCB9IGZyb20gXCIuL2dhbWUvY29uc3RhbnRzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXJhLWNhbnZhc1wiKTtcbiAgLy81NDBwXG4gIGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuICBjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuICBuZXcgR2FtZShjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKTtcbn0pOyIsImV4cG9ydCBjb25zdCBXSURUSCA9IDEyODA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNzIwO1xuZXhwb3J0IGNvbnN0IFBBRERJTkcgPSAxMDtcbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX1RJTEVfU0laRSA9IDQwMDtcbmV4cG9ydCBjb25zdCBNT1NBSUNfU0laRSA9IDUwO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IHtcbiAgcG9zaXRpb246IFtQQURESU5HLFBBRERJTkddLFxuICB3aWR0aDogV0lEVEggLSAyKlBBRERJTkcsXG4gIGhlaWdodDogSEVJR0hUIC0gMipQQURESU5HLFxuICBjZW50ZXI6IFtXSURUSC8yLCBIRUlHSFQvMl0sXG4gIGNvbGxpZGFibGU6IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBDT0xPUiA9IHtcbiAgQkFDS0dST1VORDogXCIjMDAwMDAwXCIsXG4gIERBUktfQkxVRTogXCIjMWM5MmQyXCIsXG4gIExJR0hUX0JMVUU6IFwiIzU0RUZFQVwiLFxuICBSRUQ6IFwiI0ZGMTIzNFwiLFxuICBXSElURTogXCIjRkZGRkZGXCJcbn07XG5leHBvcnQgY29uc3QgRk9OVCA9IFwiT3JiaXRyb25cIjtcblxuZXhwb3J0IGNvbnN0IFNUQVRFID0ge1xuICBMT0FESU5HOiAwLFxuICBUSVRMRTogMSxcbiAgUExBWUlORzogMixcbiAgUEFVU0VEOiAzLFxuICBHQU1FX09WRVI6IDRcbn07XG5cbmV4cG9ydCBjb25zdCBGUFMgPSA2MDtcbmV4cG9ydCBjb25zdCBTUFJJVEVfRFVSQVRJT04gPSBGUFMvNDtcbmV4cG9ydCBjb25zdCBNT1ZFX1NQRUVEID0gMS41O1xuXG5leHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBOOiBbMCwgLTFdLFxuICBORTogWzEsIC0xXSxcbiAgRTogWzEsIDBdLFxuICBTRTogWzEsIDFdLFxuICBTOiBbMCwgMV0sXG4gIFNXOiBbLTEsIDFdLFxuICBXOiBbLTEsIDBdLFxuICBOVzogWy0xLCAtMV0sXG4gIFNUQVRJT05BUlk6IFswLDBdXG59O1xuXG5leHBvcnQgY29uc3QgS0VZID0ge1xuICBFTlRFUjogMTMsXG4gIFA6IDgwLFxuICBVUDogMzgsXG4gIFc6IDg3LFxuICBMRUZUOiAzNyxcbiAgQTogNjUsXG4gIERPV046IDQwLFxuICBTOiA4MyxcbiAgUklHSFQ6IDM5LFxuICBEOiA2OCxcbiAgU1BBQ0U6IDMyLFxuICBROiA4MVxufTtcblxuZXhwb3J0IGNvbnN0IElNQUdFUyA9IHtcbiAgQkFDS0dST1VORDogbnVsbCxcbiAgUExBWUVSOntcbiAgICB1cDogW10sXG4gICAgZG93bjogW10sXG4gICAgbGVmdDogW10sXG4gICAgcmlnaHQ6IFtdXG4gIH1cbn07IiwiaW1wb3J0IHsgU1RBVEUsIEZQUywgS0VZLCBESVJFQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4uL29iamVjdHMvZ2FtZV9zdGF0ZVwiO1xuaW1wb3J0IHt0aXRsZVNjcmVlbn0gZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCB7Z2FtZVNjcmVlbn0gZnJvbSBcIi4vZ2FtZV9zY3JlZW5cIjtcbmltcG9ydCB7cGF1c2VTY3JlZW59IGZyb20gXCIuL3BhdXNlXCI7XG5pbXBvcnQge2xvYWRpbmdTY3JlZW59IGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCB7IGxvYWRJbWFnZXMgfSBmcm9tIFwiLi4vdXRpbC9nYW1lX3V0aWxcIjtcbmltcG9ydCB7IGdhbWVPdmVyU2NyZWVuIH0gZnJvbSBcIi4vZ2FtZV9vdmVyX3NjcmVlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURS5MT0FESU5HO1xuICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIHRoaXMubmV4dEZyYW1lID0gdGhpcy5uZXh0RnJhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleWRvd24gPSB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleXVwID0gdGhpcy5oYW5kbGVLZXl1cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubmV4dEZyYW1lKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleXVwKTtcbiAgICBsb2FkSW1hZ2VzKCgpPT50aGlzLnN0YXRlID0gU1RBVEUuVElUTEUpO1xuICB9XG5cbiAgbmV4dEZyYW1lKHRpbWUpe1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy50aW1lID8gKHRpbWUgLSB0aGlzLnRpbWUpIC8gKDEwMDAvRlBTKSA6IDA7IC8vaG93IG1hbnkgZnJhbWVzIGRpZCB3ZSBhZHZhbmNlXG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmZyYW1lKz1kZWx0YTtcbiAgICBzd2l0Y2godGhpcy5zdGF0ZSl7XG4gICAgICBjYXNlIFNUQVRFLkxPQURJTkc6XG4gICAgICAgIGxvYWRpbmdTY3JlZW4odGhpcy5jdHgsIHRoaXMuZnJhbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RBVEUuVElUTEU6XG4gICAgICAgIHRpdGxlU2NyZWVuKHRoaXMuY3R4LCB0aGlzLmZyYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFLlBBVVNFRDpcbiAgICAgICAgZ2FtZVNjcmVlbih0aGlzLmN0eCwgdGhpcy5mcmFtZSwgdGhpcy5nYW1lKTtcbiAgICAgICAgcGF1c2VTY3JlZW4odGhpcy5jdHgsIHRoaXMuZnJhbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RBVEUuUExBWUlORzpcbiAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZShkZWx0YSwgdGhpcy5rZXlEb3duKTtcbiAgICAgICAgZ2FtZVNjcmVlbih0aGlzLmN0eCwgdGhpcy5mcmFtZSwgdGhpcy5nYW1lKTtcbiAgICAgICAgaWYodGhpcy5nYW1lLnBsYXllci5kZWFkKXtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuR0FNRV9PVkVSO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVEFURS5HQU1FX09WRVI6XG4gICAgICAgIGdhbWVTY3JlZW4odGhpcy5jdHgsIHRoaXMuZnJhbWUsIHRoaXMuZ2FtZSk7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuKHRoaXMuY3R4LCB0aGlzLmZyYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5uZXh0RnJhbWUpO1xuICB9XG4gIGhhbmRsZUtleWRvd24oZSl7XG4gICAgaWYgKGUucmVwZWF0IHx8IHRoaXMua2V5RG93bltlLmtleUNvZGVdKSByZXR1cm47XG4gICAgc3dpdGNoIChlLmtleUNvZGUpe1xuICAgICAgY2FzZSBLRVkuRU5URVI6IC8vZW50ZXJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuVElUTEUgfHwgdGhpcy5zdGF0ZSA9PT0gU1RBVEUuR0FNRV9PVkVSKXtcbiAgICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZVN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlBMQVlJTkc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWS5TUEFDRTpcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lLnBsYXllci5wb3NpdGlvbi5qb2luKFwiLFwiKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuUDogLy9wXG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlBMQVlJTkcpe1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5QQVVTRUQ7XG4gICAgICAgICAgdGhpcy5nYW1lLnNldFBsYXllclZlbG9jaXR5KERJUkVDVElPTi5TVEFUSU9OQVJZLnNsaWNlKCkpO1xuICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuVVBdID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5MRUZUXSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuUklHSFRdID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5ET1dOXSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlID09PSBTVEFURS5QQVVTRUQpe1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5QTEFZSU5HO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuUTogLy9xXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVpdFwiKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZLlVQOlxuICAgICAgICBpZih0aGlzLnN0YXRlID09PSBTVEFURS5QTEFZSU5HKXsgXG4gICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5VUF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuRE9XTjpcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuUExBWUlORyl7XG4gICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5ET1dOXSA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuTEVGVDpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkxFRlRdID0gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWS5SSUdIVDpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICB0aGlzLmtleURvd25bS0VZLlJJR0hUXSA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coZS5rZXlDb2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGhhbmRsZUtleXVwKGUpe1xuICAgIGlmKCF0aGlzLmtleURvd25bZS5rZXlDb2RlXSkgcmV0dXJuO1xuICAgIHN3aXRjaChlLmtleUNvZGUpe1xuICAgICAgY2FzZSBLRVkuVVA6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICB0aGlzLmtleURvd25bS0VZLlVQXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuRE9XTjpcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuUExBWUlORykge1xuICAgICAgICAgIHRoaXMua2V5RG93bltLRVkuRE9XTl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZLkxFRlQ6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICB0aGlzLmtleURvd25bS0VZLkxFRlRdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWS5SSUdIVDpcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuUExBWUlORyl7XG4gICAgICAgICAgdGhpcy5rZXlEb3duW0tFWS5SSUdIVF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcblxuICBcblxufSIsImltcG9ydCB7IENPTE9SLCBGT05ULCBXSURUSCwgSEVJR0hULCBGUFMsIFNQUklURV9EVVJBVElPTiwgTU9TQUlDX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFuaW1hdGVMaW5lLCBjbGVhciwgaGV4VG9SR0IgfSBmcm9tIFwiLi4vdXRpbC9jYW52YXNfdXRpbFwiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4uL3V0aWwvZ2FtZV91dGlsXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IChjdHgsIGZyYW1lKSA9PiB7XG4gIGRyYXdPdmVybGF5KGN0eCwgZnJhbWUpO1xuICBkcmF3R2FtZU92ZXIoY3R4LCBmcmFtZSk7XG4gIGRyYXdQbGF5QWdhaW4oY3R4KTtcbn07XG5cbmNvbnN0IGRyYXdPdmVybGF5ID0gKGN0eCwgZnJhbWUpPT57XG4gIGNvbnN0IGFuaW1hdGlvblBvc2l0aW9uID0gcmFuZG9tKE1hdGguZmxvb3IoZnJhbWUgLyAoMy43NSpTUFJJVEVfRFVSQVRJT04pKSk7XG4gIGxldCB0aWxlID0gYW5pbWF0aW9uUG9zaXRpb247XG4gIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBmb3IobGV0IHggPSAwOyB4ICogTU9TQUlDX1NJWkUgPCBXSURUSDsgeCsrICl7XG4gICAgZm9yKGxldCB5ID0gMDsgeSAqIE1PU0FJQ19TSVpFIDwgSEVJR0hUOyB5Kyspe1xuICAgICAgdGlsZT1yYW5kb20odGlsZSk7XG4gICAgICBjb25zdCBhbHBoYSA9IDAuMDEgKyAoMC4zICogcmFuZG9tKHRpbGUpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBoZXhUb1JHQihDT0xPUi5MSUdIVF9CTFVFLCBhbHBoYSk7XG4gICAgICBjdHguZmlsbFJlY3QoeCpNT1NBSUNfU0laRSwgeSpNT1NBSUNfU0laRSwgTU9TQUlDX1NJWkUsIE1PU0FJQ19TSVpFKTtcbiAgICB9XG4gIH1cbiAgY3R4LmNsb3NlUGF0aCgpO1xufTtcbmNvbnN0IGRyYXdHYW1lT3ZlciA9IChjdHgsIGZyYW1lKSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGhleFRvUkdCKENPTE9SLkJBQ0tHUk9VTkQsIDAuNyk7XG4gIGN0eC5maWxsUmVjdCgwLDE1MCxXSURUSCwgMTkwKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1IuUkVEO1xuICBjdHguZmlsbFN0eWxlID0gQ09MT1IuUkVEO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LmZvbnQgPSBcIjYwcHggXCIgKyBGT05UO1xuICBjdHguc2hhZG93Q29sb3IgPSBDT0xPUi5SRUQ7XG4gIGN0eC5zaGFkb3dCbHVyID0gNSArICgyICogKE1hdGguc2luKGZyYW1lICogMiAvIEZQUykgKyAxKSk7XG4gIGNvbnN0IHRleHQgPSBcIllPVSBESUVEXCI7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBXSURUSCAvIDIsIDIyMCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIGNvbnN0IHN0YXJ0WCA9IFdJRFRIIC8gMiAtIHdpZHRoIC8gMjtcbiAgYW5pbWF0ZUxpbmUoY3R4LCBmcmFtZSwgMiAqIEZQUywgc3RhcnRYICsgd2lkdGgsIDE3MiwgLXdpZHRoKTtcbiAgYW5pbWF0ZUxpbmUoY3R4LCBmcmFtZSwgMiAqIEZQUywgc3RhcnRYLCAyMjYsIHdpZHRoKTtcbn07XG5cbmNvbnN0IGRyYXdQbGF5QWdhaW4gPSAoY3R4KSA9PntcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguZm9udCA9IFwiMzBweCBcIiArIEZPTlQ7XG4gIGN0eC5maWxsVGV4dChcIlByZXNzIEVOVEVSIHRvIHJlc3RhcnRcIiwgV0lEVEgvMiwgMzIwKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuXG59OyIsImltcG9ydCB7IGNsZWFyLCBkcmF3QmFja2dyb3VuZCB9IGZyb20gXCIuLi91dGlsL2NhbnZhc191dGlsXCI7XG5pbXBvcnQgeyBDT0xPUiwgV0lEVEgsIEhFSUdIVCwgUEFERElORywgRlBTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lU2NyZWVuID0gKGN0eCwgZnJhbWUsIGdhbWUpPT57XG4gIGNsZWFyKGN0eCk7XG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIGRyYXdCb3JkZXIoY3R4LCBmcmFtZSk7XG4gIGRyYXdHYW1lU3RhdGUoY3R4LCBmcmFtZSwgZ2FtZSk7XG59O1xuXG5jb25zdCBkcmF3R2FtZVN0YXRlID0gKGN0eCwgZnJhbWUsIGdhbWUpPT57XG4gIGdhbWUuZHJhdyhjdHgsIGZyYW1lKTtcbn07XG5cbmNvbnN0IGRyYXdCb3JkZXIgPSAoY3R4LCBmcmFtZSk9PntcbiAgY3R4LnNoYWRvd0NvbG9yID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LnNoYWRvd0JsdXIgPSA1ICsgKDIqKE1hdGguc2luKGZyYW1lICogMiAvIEZQUykrMSkpO1xuICBcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oUEFERElORyxQQURESU5HKTtcbiAgY3R4LmxpbmVUbyhXSURUSC1QQURESU5HLCBQQURESU5HKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmxpbmVXaWR0aCA9IFBBRERJTkcvMjtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyhXSURUSCAtIFBBRERJTkcsIFBBRERJTkcpO1xuICBjdHgubGluZVRvKFdJRFRILVBBRERJTkcsIEhFSUdIVC1QQURESU5HKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmxpbmVXaWR0aCA9IFBBRERJTkcvMjtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgXG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKFdJRFRIIC0gUEFERElORywgSEVJR0hUIC0gUEFERElORyk7XG4gIGN0eC5saW5lVG8oUEFERElORywgSEVJR0hULVBBRERJTkcpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHgubGluZVdpZHRoID0gUEFERElORy8yO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcblxuICBcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKFBBRERJTkcsIEhFSUdIVCAtIFBBRERJTkcpO1xuICBjdHgubGluZVRvKFBBRERJTkcsIFBBRERJTkcpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHgubGluZVdpZHRoID0gUEFERElORy8yO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcblxuICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyhQQURESU5HLCBQQURESU5HKTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC5hcmMoUEFERElORywgUEFERElORywgUEFERElORywgMCwgTWF0aC5QSSAqIDIpO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguZmlsbFN0eWxlID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmFyYyhXSURUSCAtIFBBRERJTkcsIFBBRERJTkcsIFBBRERJTkcsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC5hcmMoV0lEVEggLSBQQURESU5HLCBIRUlHSFQgLSBQQURESU5HLCBQQURESU5HLCAwLCBNYXRoLlBJICogMik7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHguYXJjKFBBRERJTkcsIEhFSUdIVCAtIFBBRERJTkcsIFBBRERJTkcsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuXG59OyIsImltcG9ydCB7IENPTE9SLCBGT05ULCBXSURUSCwgRlBTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhbmltYXRlTGluZSwgY2xlYXIgfSBmcm9tIFwiLi4vdXRpbC9jYW52YXNfdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ1NjcmVlbiA9IChjdHgsIGZyYW1lKT0+e1xuICBjbGVhcihjdHgpO1xuICBkcmF3TG9nbyhjdHgpO1xuICBkcmF3TG9hZGluZyhjdHgsIGZyYW1lKTtcbn07XG5cbmNvbnN0IGRyYXdMb2dvID0gKGN0eCkgPT4ge1xuICBjdHguc2hhZG93Q29sb3IgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHguZm9udCA9IFwiNTBweCBcIiArIEZPTlQ7XG4gIGN0eC5maWxsVGV4dChcIkF1cmFcIiwgV0lEVEggLyAyLCA2MCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmNvbnN0IGRyYXdMb2FkaW5nID0gKGN0eCwgZnJhbWUpPT57XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHguZm9udCA9IFwiMzBweCBcIiArIEZPTlQ7XG4gIGNvbnN0IHRleHQgPSBcIkxPQURJTkcuLi5cIjtcbiAgY3R4LmZpbGxUZXh0KHRleHQsIFdJRFRILzIsIDIwMCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIGNvbnN0IHN0YXJ0WCA9IFdJRFRIIC8gMiAtIHdpZHRoIC8gMjtcbiAgYW5pbWF0ZUxpbmUoY3R4LCBmcmFtZSwgMipGUFMsIHN0YXJ0WCwgMjEwLCB3aWR0aCk7XG4gIGFuaW1hdGVMaW5lKGN0eCwgZnJhbWUsIDIqRlBTLCBzdGFydFgsIDE3MCwgd2lkdGgpO1xuIFxufTsiLCJpbXBvcnQgeyBDT0xPUiwgRk9OVCwgV0lEVEgsIEZQUywgSEVJR0hULCBQQURESU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhbmltYXRlTGluZSwgaGV4VG9SR0J9IGZyb20gXCIuLi91dGlsL2NhbnZhc191dGlsXCI7XG5cblxuZXhwb3J0IGNvbnN0IHBhdXNlU2NyZWVuID0gKGN0eCwgZnJhbWUpID0+IHtcbiAgZHJhd1BhdXNlKGN0eCwgZnJhbWUpO1xufTtcblxuY29uc3QgZHJhd1BhdXNlID0gKGN0eCwgZnJhbWUpID0+IHtcbiAgY3R4LnNoYWRvd0NvbG9yID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LmZvbnQgPSBcIjUwcHggXCIgKyBGT05UO1xuICBjb25zdCB0ZXh0ID0gXCJQQVVTRURcIjtcbiAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gIGNvbnN0IHN0YXJ0WCA9IFdJRFRIIC8gMiAtIHdpZHRoIC8gMjtcbiAgXG4gIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgY3R4LmZpbGxTdHlsZSA9IGhleFRvUkdCKENPTE9SLkJBQ0tHUk9VTkQsIDAuNyk7XG4gIGN0eC5maWxsUmVjdCgzKlBBRERJTkcvMiAtIDIsIEhFSUdIVC8yIC0gNTAsIFdJRFRILSgzKlBBRERJTkcpKzQsIDY1KTtcbiAgY3R4LnNoYWRvd0JsdXIgPSA1ICsgKDIgKiAoTWF0aC5zaW4oZnJhbWUgKiAyIC8gRlBTKSArIDEpKTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBXSURUSCAvIDIsIEhFSUdIVC8yKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBhbmltYXRlTGluZShjdHgsIGZyYW1lLCAyICogRlBTLCBzdGFydFgsIEhFSUdIVC8yICsgNywgd2lkdGgsIDIpO1xuICBhbmltYXRlTGluZShjdHgsIGZyYW1lLCAyICogRlBTLCBzdGFydFgsIEhFSUdIVC8yIC0gNDIsIHdpZHRoLCAyKTtcblxufTsiLCJpbXBvcnQgeyBDT0xPUiwgRk9OVCwgV0lEVEgsIEZQUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYW5pbWF0ZUxpbmUsIGNsZWFyIH0gZnJvbSBcIi4uL3V0aWwvY2FudmFzX3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IHRpdGxlU2NyZWVuID0gKGN0eCwgZnJhbWUpPT57XG4gIGNsZWFyKGN0eCk7XG4gIGRyYXdMb2dvKGN0eCk7XG4gIGRyYXdNZW51KGN0eCwgZnJhbWUpO1xufTtcblxuY29uc3QgZHJhd0xvZ28gPSAoY3R4KT0+e1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnNoYWRvd0NvbG9yID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcbiAgY3R4LmZvbnQgPSBcIjUwcHggXCIgKyBGT05UO1xuICBjdHguZmlsbFRleHQoXCJBVVJBXCIsIFdJRFRILyAyLCA2MCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmNvbnN0IGRyYXdNZW51ID0gKGN0eCwgZnJhbWUpPT57XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LmZpbGxTdHlsZSA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHguZm9udCA9IFwiMzBweCBcIiArIEZPTlQ7XG4gIGNvbnN0IHRleHQgPSBcIlByZXNzIEVOVEVSIHRvIGJlZ2luXCI7XG4gIGN0eC5zaGFkb3dDb2xvciA9IENPTE9SLkxJR0hUX0JMVUU7XG4gIGN0eC5zaGFkb3dCbHVyID0gMTA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBXSURUSC8yLCAyMDApO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICBjb25zdCBzdGFydFggPSBXSURUSCAvIDIgLSB3aWR0aCAvIDI7XG4gIGFuaW1hdGVMaW5lKGN0eCwgZnJhbWUsIDIqRlBTLCBzdGFydFgsIDIxMCwgd2lkdGgpO1xuICBhbmltYXRlTGluZShjdHgsIGZyYW1lLCAyKkZQUywgc3RhcnRYLCAxNzAsIHdpZHRoKTtcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgY3R4LmZpbGxUZXh0KFwiQ29udHJvbHM6XCIsIHN0YXJ0WCwgMzAwKTtcbiAgY3R4LmZvbnQgPSBcIjIwcHggXCIgKyBGT05UO1xuICBjdHguZmlsbFRleHQoXCItIEFycm93cyB0byBNT1ZFXCIsIHN0YXJ0WCArIDIwLCAzNDApO1xuICBjdHguZmlsbFRleHQoXCItIFdBU0QgdG8gU0hPT1RcIiwgc3RhcnRYICsgMjAsIDM3MCk7XG4gIGN0eC5maWxsVGV4dChcIi0gUCB0byBQQVVTRVwiLCBzdGFydFggKyAyMCwgNDAwKTtcbiAgY3R4LmZvbnQgPSBcIjMwcHggXCIgKyBGT05UO1xuICBjdHguZmlsbFRleHQoXCJSdWxlczpcIiwgc3RhcnRYLCA0NjApO1xuICBjdHguZm9udCA9IFwiMjBweCBcIiArIEZPTlQ7XG4gIGN0eC5maWxsVGV4dChcIi0gS2lsbCBhbGwgdGhlIHRoaW5nc1wiLCBzdGFydFggKyAyMCwgNTAwKTtcbiAgY3R4LmZpbGxUZXh0KFwiLSBEb24ndCBnZXQgaGl0XCIsIHN0YXJ0WCArIDIwLCA1MzApO1xuICBjdHguZmlsbFRleHQoXCItIERvbid0IGdldCB0b3VjaCB0aGUgbGFzZXJzXCIsIHN0YXJ0WCArIDIwLCA1NjApO1xuICBjdHguY2xvc2VQYXRoKCk7XG59OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL2dhbWVfb2JqZWN0XCI7XG5pbXBvcnQgeyBDT0xPUiB9IGZyb20gXCIuLi9nYW1lL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWFkbHlPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICBvcHRpb25zLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCBDT0xPUi5SRUQ7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5kZWFkbHkgPSB0cnVlO1xuICB9XG59IiwiaW1wb3J0IHsgc2NhbGVWZWN0b3IgfSBmcm9tIFwiLi4vdXRpbC9nYW1lX3V0aWxcIjtcbmltcG9ydCB7IERJUkVDVElPTiwgTU9WRV9TUEVFRCwgQ09MT1IsIEZQUyB9IGZyb20gXCIuLi9nYW1lL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0e1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBbMCwwXTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gb3B0aW9ucy52ZWxvY2l0eSB8fCBESVJFQ1RJT04uU1RBVElPTkFSWS5zbGljZSgpO1xuICAgIHRoaXMuZmFjaW5nID0gb3B0aW9ucy5mYWNpbmcgfHwgRElSRUNUSU9OLlMuc2xpY2UoKTtcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxMDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDEwO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8IENPTE9SLkxJR0hUX0JMVUU7XG4gICAgdGhpcy5jb2xsaWRhYmxlID0gb3B0aW9ucy5jb2xsaWRhYmxlIHx8IHRydWU7XG4gICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZCB8fCBNT1ZFX1NQRUVEO1xuICAgIHRoaXMua2lsbGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmdyYWNlID0gb3B0aW9ucy5ncmFjZSB8fCBbWzAsIDBdLCBbMCwgMF1dOyAvL2dyYWNlIHBpeGVscyBpbiBlYWNoIGRpcmVjdGlvbiBmb3IgaGl0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9bW3N0YXJ0eCwgZW5keF0sIFtzdGFydHksIGVuZHldXVxuICB9XG5cbiAgZHJhdyhjdHgsIGZyYW1lKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyguLi50aGlzLnBvc2l0aW9uKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguc2hhZG93Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5zaGFkb3dCbHVyID0gNSArICgyICogKE1hdGguc2luKGZyYW1lICogMiAvIEZQUykgKyAxKSk7XG4gICAgY3R4LmZpbGxSZWN0KC4uLnRoaXMucG9zaXRpb24sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cbiAgZHJhd0ltYWdlKGN0eCwgaW1nKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyguLi50aGlzLnBvc2l0aW9uKTtcbiAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIC4uLnRoaXMucG9zaXRpb24sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBuZXh0UG9zaXRpb24oZGVsdGEpe1xuICAgIGNvbnN0IHNjYWxlZFZlbG9jaXR5ID0gc2NhbGVWZWN0b3Ioc2NhbGVWZWN0b3IodGhpcy52ZWxvY2l0eSwgZGVsdGEpLCB0aGlzLm1vdmVTcGVlZCk7XG4gICAgcmV0dXJuIFt0aGlzLnBvc2l0aW9uWzBdICsgc2NhbGVkVmVsb2NpdHlbMF0sIHRoaXMucG9zaXRpb25bMV0gKyBzY2FsZWRWZWxvY2l0eVsxXV07XG4gIH1cbiAgbmV4dFBvc2l0aW9uQXNPYmplY3QoZGVsdGEpe1xuICAgIHJldHVybiB7cG9zaXRpb246IHRoaXMubmV4dFBvc2l0aW9uKGRlbHRhKSwgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQsIGNvbGxpZGFibGU6IHRoaXMuY29sbGlkYWJsZSwga2lsbGFibGU6IHRoaXMua2lsbGFibGUsIGdyYWNlOiB0aGlzLmdyYWNlfTtcbiAgfVxuICBtb3ZlVG9OZXh0UG9zaXRpb24oZGVsdGEpe1xuICAgIGlmKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5TVEFUSU9OQVJZLmpvaW4oXCIsXCIpKXtcbiAgICAgIC8vbGVhdmUgZmFjaW5nIGRpcmVjdGlvbiBhbG9uZVxuICAgIH1lbHNlIGlmKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5OLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5XLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5FLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5TLmpvaW4oXCIsXCIpKXtcbiAgICAgIHRoaXMuZmFjaW5nID0gdGhpcy52ZWxvY2l0eS5zbGljZSgpO1xuICAgIH1lbHNlIGlmKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5OVy5qb2luKFwiLFwiKSl7XG4gICAgICB0aGlzLmZhY2luZyA9IERJUkVDVElPTi5XO1xuICAgIH1lbHNlIGlmKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5ORS5qb2luKFwiLFwiKSl7XG4gICAgICB0aGlzLmZhY2luZyA9IERJUkVDVElPTi5FO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uUztcbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGRlbHRhKTtcbiAgfVxuXG4gIG5leHRYUG9zaXRpb24oZGVsdGEpe1xuICAgIGNvbnN0IHNjYWxlZFZlbG9jaXR5ID0gc2NhbGVWZWN0b3Ioc2NhbGVWZWN0b3IodGhpcy52ZWxvY2l0eSwgZGVsdGEpLCB0aGlzLm1vdmVTcGVlZCk7XG4gICAgcmV0dXJuIFt0aGlzLnBvc2l0aW9uWzBdICsgc2NhbGVkVmVsb2NpdHlbMF0sIHRoaXMucG9zaXRpb25bMV1dO1xuICB9XG4gIG5leHRYUG9zaXRpb25Bc09iamVjdChkZWx0YSl7XG4gICAgcmV0dXJuIHtwb3NpdGlvbjogdGhpcy5uZXh0WFBvc2l0aW9uKGRlbHRhKSwgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQsIGNvbGxpZGFibGU6IHRoaXMuY29sbGlkYWJsZSwga2lsbGFibGU6IHRoaXMua2lsbGFibGUsIGdyYWNlOiB0aGlzLmdyYWNlfTtcbiAgfVxuICBtb3ZlVG9OZXh0WFBvc2l0aW9uKGRlbHRhKXtcbiAgICBpZih0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uU1RBVElPTkFSWS5qb2luKFwiLFwiKSl7XG4gICAgICAvL2xlYXZlIGZhY2luZyBkaXJlY3Rpb24gYWxvbmVcbiAgICB9ZWxzZSBpZih0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uTi5qb2luKFwiLFwiKSB8fCB0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uVy5qb2luKFwiLFwiKSB8fCB0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uRS5qb2luKFwiLFwiKSB8fCB0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uUy5qb2luKFwiLFwiKSl7XG4gICAgICB0aGlzLmZhY2luZyA9IHRoaXMudmVsb2NpdHkuc2xpY2UoKTtcbiAgICB9ZWxzZSBpZih0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uTlcuam9pbihcIixcIikpe1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uVztcbiAgICB9ZWxzZSBpZih0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uTkUuam9pbihcIixcIikpe1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uRTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZmFjaW5nID0gRElSRUNUSU9OLlM7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm5leHRYUG9zaXRpb24oZGVsdGEpO1xuICB9XG5cbiAgbmV4dFlQb3NpdGlvbihkZWx0YSkge1xuICAgIGNvbnN0IHNjYWxlZFZlbG9jaXR5ID0gc2NhbGVWZWN0b3Ioc2NhbGVWZWN0b3IodGhpcy52ZWxvY2l0eSwgZGVsdGEpLCB0aGlzLm1vdmVTcGVlZCk7XG4gICAgcmV0dXJuIFt0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdICsgc2NhbGVkVmVsb2NpdHlbMV1dO1xuICB9XG4gIG5leHRZUG9zaXRpb25Bc09iamVjdChkZWx0YSkge1xuICAgIHJldHVybiB7IHBvc2l0aW9uOiB0aGlzLm5leHRZUG9zaXRpb24oZGVsdGEpLCB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCwgY29sbGlkYWJsZTogdGhpcy5jb2xsaWRhYmxlLCBraWxsYWJsZTogdGhpcy5raWxsYWJsZSwgZ3JhY2U6IHRoaXMuZ3JhY2UgfTtcbiAgfVxuICBtb3ZlVG9OZXh0WVBvc2l0aW9uKGRlbHRhKSB7XG4gICAgaWYgKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5TVEFUSU9OQVJZLmpvaW4oXCIsXCIpKSB7XG4gICAgICAvL2xlYXZlIGZhY2luZyBkaXJlY3Rpb24gYWxvbmVcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5OLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5XLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5FLmpvaW4oXCIsXCIpIHx8IHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5TLmpvaW4oXCIsXCIpKSB7XG4gICAgICB0aGlzLmZhY2luZyA9IHRoaXMudmVsb2NpdHkuc2xpY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5OVy5qb2luKFwiLFwiKSkge1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uVztcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkuam9pbihcIixcIikgPT09IERJUkVDVElPTi5ORS5qb2luKFwiLFwiKSkge1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uRTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYWNpbmcgPSBESVJFQ1RJT04uUztcbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMubmV4dFlQb3NpdGlvbihkZWx0YSk7XG4gIH1cblxuICBhZGRWZWxvY2l0eShkaXJlY3Rpb24pe1xuICAgIHRoaXMudmVsb2NpdHlbMF0gKz0gZGlyZWN0aW9uWzBdO1xuICAgIHRoaXMudmVsb2NpdHlbMV0gKz0gZGlyZWN0aW9uWzFdO1xuICB9XG4gIHJlbW92ZVZlbG9jaXR5KGRpcmVjdGlvbil7XG4gICAgdGhpcy52ZWxvY2l0eVswXSAtPSBkaXJlY3Rpb25bMF07XG4gICAgdGhpcy52ZWxvY2l0eVsxXSAtPSBkaXJlY3Rpb25bMV07XG4gIH1cbiAgc2V0VmVsb2NpdHkoZGlyZWN0aW9uKXtcbiAgICB0aGlzLnZlbG9jaXR5WzBdID0gZGlyZWN0aW9uWzBdO1xuICAgIHRoaXMudmVsb2NpdHlbMV0gPSBkaXJlY3Rpb25bMV07XG4gIH1cbn0iLCJpbXBvcnQgeyBXSURUSCwgSEVJR0hULCBESVJFQ1RJT04sIENBTlZBUywgS0VZLCBQQURESU5HIH0gZnJvbSBcIi4uL2dhbWUvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGVja0JvdW5kcywgYm94Q29sbGlzaW9uLCBkaXJlY3Rpb25Gb3JLZXlzIH0gZnJvbSBcIi4uL3V0aWwvZ2FtZV91dGlsXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vZ2FtZV9vYmplY3RcIjtcbmltcG9ydCBEZWFkbHlPYmplY3QgZnJvbSBcIi4vZGVhZGx5X29iamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGV7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgIHBvc2l0aW9uOiBbV0lEVEgvMiAtIFBBRERJTkcsIEhFSUdIVC8yIC0gUEFERElOR10sXG4gICAgICB2ZWxvY2l0eTogRElSRUNUSU9OLlNUQVRJT05BUlkuc2xpY2UoKSxcbiAgICAgIGZhY2luZzogRElSRUNUSU9OLlMsXG4gICAgICB3aWR0aDogMjgsXG4gICAgICBoZWlnaHQ6IDQ2LFxuICAgICAgZ3JhY2U6IFtbNSw1XSxbNSw1XV1cbiAgICB9KTtcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtcbiAgICAgIG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgcG9zaXRpb246IFs1NzAsIDE5N10sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIGhlaWdodDogMTExXG4gICAgICB9KSxcbiAgICAgIG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgcG9zaXRpb246IFs3MDAsIDE5N10sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIGhlaWdodDogMTExXG4gICAgICB9KSxcbiAgICAgIG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgcG9zaXRpb246IFs0MjQsIDMwOF0sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgd2lkdGg6IDE0OSxcbiAgICAgICAgaGVpZ2h0OiAzXG4gICAgICB9KSxcbiAgICAgIG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgcG9zaXRpb246IFs0MjQsIDQ1OF0sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgd2lkdGg6IDQyNixcbiAgICAgICAgaGVpZ2h0OiAzXG4gICAgICB9KSxcblxuICAgICAgbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICBwb3NpdGlvbjogWzcwMCwgMzA4XSxcbiAgICAgICAgdmVsb2NpdHk6IFswLDBdLFxuICAgICAgICB3aWR0aDogMTQ4LFxuICAgICAgICBoZWlnaHQ6IDNcbiAgICAgIH0pLFxuICAgICAgXG4gICAgICBuZXcgRGVhZGx5T2JqZWN0KHtcbiAgICAgICAgcG9zaXRpb246IFs4NDksIDMwOF0sXG4gICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIGhlaWdodDogMTUzLFxuICAgICAgICBncmFjZTogW1szLDNdLFswLDBdXVxuICAgICAgfSksXG4gICAgICBcbiAgICBdO1xuICB9XG4gIHVwZGF0ZShkZWx0YSwga2V5ZG93bil7XG4gICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHkoZGlyZWN0aW9uRm9yS2V5cyhrZXlkb3duKSk7XG4gICAgY29uc3QgbmV4dFBvc2l0aW9uID0gdGhpcy5wbGF5ZXIubmV4dFBvc2l0aW9uQXNPYmplY3QoZGVsdGEpO1xuICAgIGlmKHRoaXMuY2hlY2tDb2xsaXNpb25zKG5leHRQb3NpdGlvbikpe1xuICAgICAgdGhpcy5wbGF5ZXIubW92ZVRvTmV4dFBvc2l0aW9uKGRlbHRhKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGlmKG5leHRQb3NpdGlvbi5kZWFkKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZGllKCk7XG4gICAgICAgIGtleWRvd25bS0VZLlVQXSA9IGZhbHNlO1xuICAgICAgICBrZXlkb3duW0tFWS5MRUZUXSA9IGZhbHNlO1xuICAgICAgICBrZXlkb3duW0tFWS5SSUdIVF0gPSBmYWxzZTtcbiAgICAgICAga2V5ZG93bltLRVkuRE9XTl0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24gPSBuZXh0UG9zaXRpb24ucG9zaXRpb247XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIudmVsb2NpdHlbMF0gIT09IDAgJiYgdGhpcy5wbGF5ZXIudmVsb2NpdHlbMV0gIT09IDApe1xuICAgICAgICAgIGNvbnN0IHhNb3ZlID0gdGhpcy5wbGF5ZXIubmV4dFhQb3NpdGlvbkFzT2JqZWN0KGRlbHRhKTtcbiAgICAgICAgICBpZih0aGlzLmNoZWNrQ29sbGlzaW9ucyh4TW92ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb05leHRYUG9zaXRpb24oZGVsdGEpO1xuICAgICAgICAgIH1lbHNlIGlmKHhNb3ZlLmRlYWQpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZGllKCk7XG4gICAgICAgICAgICBrZXlkb3duW0tFWS5VUF0gPSBmYWxzZTtcbiAgICAgICAgICAgIGtleWRvd25bS0VZLkxFRlRdID0gZmFsc2U7XG4gICAgICAgICAgICBrZXlkb3duW0tFWS5SSUdIVF0gPSBmYWxzZTtcbiAgICAgICAgICAgIGtleWRvd25bS0VZLkRPV05dID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbiA9IHhNb3ZlLnBvc2l0aW9uO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgeU1vdmUgPSB0aGlzLnBsYXllci5uZXh0WVBvc2l0aW9uQXNPYmplY3QoZGVsdGEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb2xsaXNpb25zKHlNb3ZlKSl7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVUb05leHRZUG9zaXRpb24oZGVsdGEpO1xuICAgICAgICAgICAgfWVsc2UgaWYoeU1vdmUuZGVhZCl7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLmRpZSgpO1xuICAgICAgICAgICAgICBrZXlkb3duW0tFWS5VUF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAga2V5ZG93bltLRVkuTEVGVF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAga2V5ZG93bltLRVkuUklHSFRdID0gZmFsc2U7XG4gICAgICAgICAgICAgIGtleWRvd25bS0VZLkRPV05dID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uID0geU1vdmUucG9zaXRpb247XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zdG9wUGxheWVyKGtleWRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5zdG9wUGxheWVyKGtleWRvd24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdG9wUGxheWVyKGtleWRvd24pe1xuICAgIHRoaXMuc2V0UGxheWVyVmVsb2NpdHkoRElSRUNUSU9OLlNUQVRJT05BUlkuc2xpY2UoKSk7XG4gIH1cbiAgY2hlY2tDb2xsaXNpb25zKG9iamVjdCl7XG4gICAgaWYoIWNoZWNrQm91bmRzKG9iamVjdCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoOyArK2kpe1xuICAgICAgaWYoYm94Q29sbGlzaW9uKHRoaXMub2JzdGFjbGVzW2ldLCBvYmplY3QpKXtcbiAgICAgICAgaWYodGhpcy5vYnN0YWNsZXNbaV0uZGVhZGx5ICYmIG9iamVjdC5raWxsYWJsZSl7XG4gICAgICAgICAgb2JqZWN0LmRlYWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gXG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRyYXcoY3R4LCBmcmFtZSl7XG4gICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgsIGZyYW1lKTtcbiAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKG9ic3RhY2xlPT5vYnN0YWNsZS5kcmF3KGN0eCwgZnJhbWUpKTtcbiAgfVxuICBhZGRQbGF5ZXJWZWxvY2l0eShkaXJlY3Rpb24pe1xuICAgIHRoaXMucGxheWVyLmFkZFZlbG9jaXR5KGRpcmVjdGlvbik7XG4gIH1cbiAgcmVtb3ZlUGxheWVyVmVsb2NpdHkoZGlyZWN0aW9uKXtcbiAgICB0aGlzLnBsYXllci5yZW1vdmVWZWxvY2l0eShkaXJlY3Rpb24pO1xuICB9XG4gIHNldFBsYXllclZlbG9jaXR5KGRpcmVjdGlvbil7XG4gICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHkoZGlyZWN0aW9uKTtcbiAgfVxufSIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL2dhbWVfb2JqZWN0XCI7XG5pbXBvcnQgeyBJTUFHRVMsIERJUkVDVElPTiwgU1BSSVRFX0RVUkFUSU9OIH0gZnJvbSBcIi4uL2dhbWUvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3R7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuaW1hZ2VzID0gSU1BR0VTLlBMQVlFUjtcbiAgICB0aGlzLmtpbGxhYmxlID0gdHJ1ZTtcbiAgfVxuICBkcmF3KGN0eCwgZnJhbWUpe1xuICAgIFxuICAgIC8vZmlndXJlIG91dCB3aGF0IGltYWdlIHRvIGtleSBpbnRvXG4gICAgbGV0IGltZ0RpcmVjdGlvbjtcbiAgICBzd2l0Y2godGhpcy5mYWNpbmcuam9pbihcIixcIikpe1xuICAgICAgY2FzZSBESVJFQ1RJT04uTi5qb2luKFwiLFwiKTpcbiAgICAgICAgaW1nRGlyZWN0aW9uID0gXCJ1cFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElSRUNUSU9OLkUuam9pbihcIixcIik6XG4gICAgICAgIGltZ0RpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJUkVDVElPTi5XLmpvaW4oXCIsXCIpOlxuICAgICAgICBpbWdEaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJUkVDVElPTi5TLmpvaW4oXCIsXCIpOlxuICAgICAgICBpbWdEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWdEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGltZ051bWJlcjtcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3IoZnJhbWUgLyBTUFJJVEVfRFVSQVRJT04pICUgNCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWdOdW1iZXIgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1nTnVtYmVyID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltZ051bWJlciA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWdOdW1iZXIgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGltZ051bWJlciA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih0aGlzLnZlbG9jaXR5LmpvaW4oXCIsXCIpID09PSBESVJFQ1RJT04uU1RBVElPTkFSWS5qb2luKFwiLFwiKSlcbiAgICAgIGltZ051bWJlciA9IDE7XG5cbiAgICBjb25zdCBpbWcgPSB0aGlzLmltYWdlc1tpbWdEaXJlY3Rpb25dW2ltZ051bWJlcl07XG5cbiAgICBzdXBlci5kcmF3SW1hZ2UoY3R4LCBpbWcpO1xuICB9XG5cbiAgZGllKCl7XG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gWy0xLCAtMV07XG4gICAgdGhpcy52ZWxvY2l0eSA9IFswLCAwXTtcbiAgfVxuICBcbn0iLCJpbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDT0xPUiwgQkFDS0dST1VORF9USUxFX1NJWkUsIElNQUdFUywgUEFERElORyB9IGZyb20gXCIuLi9nYW1lL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoY3R4KT0+e1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICBjdHguZmlsbFN0eWxlID0gQ09MT1IuQkFDS0dST1VORDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xufTtcbmV4cG9ydCBjb25zdCBhbmltYXRlTGluZSA9IChjdHgsIGZyYW1lLCBkdXJhdGlvbiwgeCwgeSwgd2lkdGgsIGxpbmVXaWR0aCA9IDEpPT57XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY29uc3QgcGVyY2VudCA9IChmcmFtZSAlIGR1cmF0aW9uKSAvIGR1cmF0aW9uO1xuICBjb25zdCBzdGFydE9mZnNldCA9IChwZXJjZW50IDwgMC41KSA/IDAgOiB3aWR0aCAqIDIgKiAocGVyY2VudCAtIDAuNSk7XG4gIGNvbnN0IGVuZE9mZnNldCA9IChwZXJjZW50ID4gMC41KSA/IDAgOiB3aWR0aCAtIHdpZHRoICogMiAqIHBlcmNlbnQ7XG4gIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gIGN0eC5tb3ZlVG8oeCArIHN0YXJ0T2Zmc2V0LCB5KTtcbiAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSBlbmRPZmZzZXQsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3QmFja2dyb3VuZCA9IChjdHgpID0+IHtcbiAgY3R4LnNoYWRvd0NvbG9yID0gQ09MT1IuTElHSFRfQkxVRTtcbiAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICBmb3IobGV0IHggPSAwOyB4KkJBQ0tHUk9VTkRfVElMRV9TSVpFIDw9IFdJRFRIOyB4Kyspe1xuICAgIGZvcihsZXQgeSA9IDA7IHkqQkFDS0dST1VORF9USUxFX1NJWkUgPD0gSEVJR0hUOyB5Kyspe1xuICAgICAgY3R4LmRyYXdJbWFnZShJTUFHRVMuQkFDS0dST1VORCwgeCpCQUNLR1JPVU5EX1RJTEVfU0laRSwgeSpCQUNLR1JPVU5EX1RJTEVfU0laRSwgQkFDS0dST1VORF9USUxFX1NJWkUsIEJBQ0tHUk9VTkRfVElMRV9TSVpFKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJQYWRkaW5nKGN0eCk7XG59O1xuXG5jb25zdCBjbGVhclBhZGRpbmcgPSAoY3R4KT0+e1xuICBjdHguY2xlYXJSZWN0KDAsMCxQQURESU5HLEhFSUdIVCk7XG4gIGN0eC5jbGVhclJlY3QoMCwwLFdJRFRILFBBRERJTkcpO1xuICBjdHguY2xlYXJSZWN0KFdJRFRILVBBRERJTkcsMCxQQURESU5HLEhFSUdIVCk7XG4gIGN0eC5jbGVhclJlY3QoMCxIRUlHSFQtUEFERElORyxXSURUSCxQQURESU5HKTtcbiAgXG4gIGN0eC5maWxsU3R5bGUgPSBDT0xPUi5CQUNLR1JPVU5EO1xuICBjdHguc2hhZG93Q29sb3IgPSBDT0xPUi5MSUdIVF9CTFVFO1xuICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gIGN0eC5maWxsUmVjdCgwLDAsUEFERElORyxIRUlHSFQpO1xuICBjdHguZmlsbFJlY3QoMCwwLFdJRFRILFBBRERJTkcpO1xuICBjdHguZmlsbFJlY3QoV0lEVEgtUEFERElORywwLFBBRERJTkcsSEVJR0hUKTtcbiAgY3R4LmZpbGxSZWN0KDAsSEVJR0hULVBBRERJTkcsV0lEVEgsUEFERElORyk7XG59O1xuXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODA1NjkwM1xuZXhwb3J0IGNvbnN0IGhleFRvUkdCID0gKGhleCwgYWxwaGEpPT57XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSxcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXG4gICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuXG4gIGlmIChhbHBoYSkge1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xuICB9XG59OyIsImltcG9ydCB7SU1BR0VTLCBQQURESU5HLCBXSURUSCwgSEVJR0hULCBLRVksIERJUkVDVElPTn0gZnJvbSBcIi4uL2dhbWUvY29uc3RhbnRzXCI7XG5cbi8vcHJlbG9hZCBpbWFnZXMgZm9yIGRyYXdpbmcsIGNhbGxiYWNrIHdoZW4gY29tcGxldGVkXG5leHBvcnQgY29uc3QgbG9hZEltYWdlcyA9IChjYWxsYmFjayk9PntcbiAgICBsZXQgY291bnQgPSAwOyAvL2hvdyBtYW55IGltYWdlcyBoYXZlIGxvYWRlZD9cbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIHtcbiAgICAgIHRvdGFsICs9IDE7XG4gICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gbG9hZGVkO1xuICAgICAgaW1nLnNyYyA9IGBpbWFnZXMvYmFja2dyb3VuZC1wYXR0ZXJuLnBuZ2A7XG4gICAgICBJTUFHRVMuQkFDS0dST1VORCA9IGltZztcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widXBcIiwgXCJkb3duXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdO1xuICAgIGRpcmVjdGlvbnMuZm9yRWFjaChkaXJlY3Rpb249PntcbiAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gMzsgKytpICl7XG4gICAgICAgIHRvdGFsICs9IDE7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZDtcbiAgICAgICAgaW1nLnNyYyA9IGBpbWFnZXMvc3ByaXRlLyR7ZGlyZWN0aW9ufV8ke2l9LnBuZ2A7XG4gICAgICAgIElNQUdFUy5QTEFZRVJbZGlyZWN0aW9uXS5wdXNoKGltZyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2dldHMgY2FsbGVkIHdoZW4gYW4gaW1hZ2UgZ2V0cyBsb2FkZWRcbiAgICBmdW5jdGlvbiBsb2FkZWQoKSB7XG4gICAgICBjb3VudCsrO1xuICAgICAgaWYgKGNvdW50ID49IHRvdGFsKSB7XG4gICAgICAgIC8vZXhlY3V0ZSBjYWxsYmFjayB3aGVuIGFsbCBpbWFnZXMgaGF2ZSBzdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBzY2FsZVZlY3RvciA9ICh2ZWN0b3IsIGRlbHRhKT0+e1xuICAgIHJldHVybiBbdmVjdG9yWzBdICogZGVsdGEsIHZlY3RvclsxXSAqIGRlbHRhXTtcbiAgfTtcblxuICBleHBvcnQgY29uc3QgYm94Q29sbGlzaW9uID0gKG9iamVjdDEsIG9iamVjdDIpPT57XG4gICAgaWYgKCFvYmplY3QxLmNvbGxpZGFibGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIW9iamVjdDIuY29sbGlkYWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSBvYmplY3QxLnBvc2l0aW9uO1xuICAgIGNvbnN0IFtvdGhlclN0YXJ0WCwgb3RoZXJTdGFydFldID0gb2JqZWN0Mi5wb3NpdGlvbjtcbiAgICBjb25zdCBbZW5kWCwgZW5kWV0gPSBbc3RhcnRYICsgb2JqZWN0MS53aWR0aCwgc3RhcnRZICsgb2JqZWN0MS5oZWlnaHRdO1xuICAgIGNvbnN0IFtvdGhlckVuZFgsIG90aGVyRW5kWV0gPSBbb3RoZXJTdGFydFggKyBvYmplY3QyLndpZHRoLCBvdGhlclN0YXJ0WSArIG9iamVjdDIuaGVpZ2h0XTtcblxuICAgIHJldHVybiAoc3RhcnRYICsgb2JqZWN0MS5ncmFjZVswXVswXSA8PSBvdGhlckVuZFgtb2JqZWN0Mi5ncmFjZVswXVsxXSAmJlxuICAgICAgZW5kWCAtIG9iamVjdDEuZ3JhY2VbMF1bMV0gPj0gb3RoZXJTdGFydFggKyBvYmplY3QyLmdyYWNlWzBdWzBdICYmXG4gICAgICBzdGFydFkgKyBvYmplY3QxLmdyYWNlWzFdWzBdIDw9IG90aGVyRW5kWSAtIG9iamVjdDIuZ3JhY2VbMV1bMV0gJiZcbiAgICAgIGVuZFkgLSBvYmplY3QxLmdyYWNlWzFdWzFdID49IG90aGVyU3RhcnRZICsgb2JqZWN0Mi5ncmFjZVsxXVswXSk7XG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IGNoZWNrQm91bmRzID0gKG9iamVjdCk9PntcbiAgICByZXR1cm4gIShvYmplY3QucG9zaXRpb25bMF0gKyBvYmplY3QuZ3JhY2VbMF1bMF0gPCBQQURESU5HICB8fCBvYmplY3QucG9zaXRpb25bMF0gKyBvYmplY3Qud2lkdGggLSBvYmplY3QuZ3JhY2VbMF1bMV0gPiBXSURUSCAtIFBBRERJTkcgfHxcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSArIG9iamVjdC5ncmFjZVsxXVswXSA8IFBBRERJTkcgfHwgb2JqZWN0LnBvc2l0aW9uWzFdICsgb2JqZWN0LmhlaWdodCAtIG9iamVjdC5ncmFjZVsxXVsxXSA+IEhFSUdIVCAtIFBBRERJTkcpXG4gIH07XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5MzAzNzI1XG5leHBvcnQgY29uc3QgcmFuZG9tID0gKHNlZWQpID0+IHtcbiAgY29uc3QgeCA9IE1hdGguc2luKHNlZWQpICogMTAwMDA7XG4gIHJldHVybiB4IC0gTWF0aC5mbG9vcih4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXJlY3Rpb25Gb3JLZXlzID0gKGtleWRvd24pID0+e1xuICBjb25zdCB2ZWxvY2l0eSA9IFswLDBdO1xuICBpZihrZXlkb3duW0tFWS5VUF0pe1xuICAgIHZlbG9jaXR5WzFdLT0xO1xuICB9XG4gIGlmKGtleWRvd25bS0VZLkRPV05dKXtcbiAgICB2ZWxvY2l0eVsxXSs9MTtcbiAgfVxuICBpZihrZXlkb3duW0tFWS5MRUZUXSl7XG4gICAgdmVsb2NpdHlbMF0tPTE7XG4gIH1cbiAgaWYoa2V5ZG93bltLRVkuUklHSFRdKXtcbiAgICB2ZWxvY2l0eVswXSs9MTtcbiAgfVxuICByZXR1cm4gdmVsb2NpdHk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=