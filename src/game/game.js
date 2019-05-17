import { STATE, FPS, KEY, DIRECTION } from "./constants";
import GameState from "../objects/game_state";
import {titleScreen} from "./title";
import {gameScreen} from "./game_screen";
import {pauseScreen} from "./pause";
import {loadingScreen} from "./loading";
import { loadImages } from "../util/game_util";
import { gameOverScreen } from "./game_over_screen";

export default class Game{
  constructor(ctx){
    this.keyDown = {};
    this.ctx = ctx;
    this.state = STATE.LOADING;
    this.frame = 0;
    this.nextFrame = this.nextFrame.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.requestId = requestAnimationFrame(this.nextFrame);
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
    loadImages(()=>this.state = STATE.TITLE);
  }

  nextFrame(time){
    const delta = this.time ? (time - this.time) / (1000/FPS) : 0; //how many frames did we advance
    this.time = time;
    this.frame+=delta;
    switch(this.state){
      case STATE.LOADING:
        loadingScreen(this.ctx, this.frame);
        break;
      case STATE.TITLE:
        titleScreen(this.ctx, this.frame);
        break;
      case STATE.PAUSED:
        gameScreen(this.ctx, this.frame, this.game);
        pauseScreen(this.ctx, this.frame);
        break;
      case STATE.PLAYING:
        this.game.update(delta, this.keyDown);
        gameScreen(this.ctx, this.frame, this.game);
        if(this.game.player.dead){
          this.state = STATE.GAME_OVER;
        }
        break;
      case STATE.GAME_OVER:
        gameScreen(this.ctx, this.frame, this.game);
        gameOverScreen(this.ctx, this.frame);
        break;
      default:
        break;
    }
    this.requestId = requestAnimationFrame(this.nextFrame);
  }
  handleKeydown(e){
    if (e.repeat || this.keyDown[e.keyCode]) return;
    switch (e.keyCode){
      case KEY.ENTER: //enter
        if(this.state === STATE.TITLE || this.state === STATE.GAME_OVER){
          this.game = new GameState();
          this.state = STATE.PLAYING;
        }
        break;
      case KEY.SPACE:
        console.log(this.game.player.position.join(","));
        break;
      case KEY.P: //p
        if(this.state === STATE.PLAYING){
          this.state = STATE.PAUSED;
          this.game.setPlayerVelocity(DIRECTION.STATIONARY.slice());
          this.keyDown[KEY.UP] = false;
          this.keyDown[KEY.LEFT] = false;
          this.keyDown[KEY.RIGHT] = false;
          this.keyDown[KEY.DOWN] = false;
        }else if(this.state === STATE.PAUSED){
          this.state = STATE.PLAYING;
        }
        break;
      case KEY.Q: //q
        console.log("quit");
        cancelAnimationFrame(this.requestId);
        break;
      case KEY.UP:
        if(this.state === STATE.PLAYING){ 
          this.keyDown[KEY.UP] = true;
        }
        break;
      case KEY.DOWN:
        if(this.state === STATE.PLAYING){
          this.keyDown[KEY.DOWN] = true;
        } 
        break;
      case KEY.LEFT:
        if (this.state === STATE.PLAYING) {
          this.keyDown[KEY.LEFT] = true;
        } 
        break;
      case KEY.RIGHT:
        if (this.state === STATE.PLAYING) {
          this.keyDown[KEY.RIGHT] = true;
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
      case KEY.UP:
        if(this.state === STATE.PLAYING) {
          this.keyDown[KEY.UP] = false;
        }
        break;
      case KEY.DOWN:
        if(this.state === STATE.PLAYING) {
          this.keyDown[KEY.DOWN] = false;
        }
        break;
      case KEY.LEFT:
        if(this.state === STATE.PLAYING) {
          this.keyDown[KEY.LEFT] = false;
        }
        break;
      case KEY.RIGHT:
        if(this.state === STATE.PLAYING){
          this.keyDown[KEY.RIGHT] = false;
        }
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }
  

  

}