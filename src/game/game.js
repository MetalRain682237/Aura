import { STATE, FPS, KEY, DIRECTION } from "./constants";
import GameState from "../objects/game_state";
import {titleScreen} from "./title";
import {gameScreen} from "./game_screen";
import {pauseScreen} from "./pause";
import {loadingScreen} from "./loading";
import { loadImages, resetKeys } from "../util/game_util";
import { gameOverScreen } from "./game_over_screen";
import { winScreen } from "./win_screen";

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
    document.fonts.ready.then(()=>{ loadImages(() => this.state = STATE.TITLE); });
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
          resetKeys(this.keyDown);
        }else if(this.game.enemies.length === 0){
          this.state = STATE.WIN;
          resetKeys(this.keyDown);
        }
        break;
      case STATE.GAME_OVER:
        gameScreen(this.ctx, this.frame, this.game);
        gameOverScreen(this.ctx, this.frame);
        break;
      case STATE.WIN:
        gameScreen(this.ctx, this.frame, this.game);
        winScreen(this.ctx, this.frame, true, this.game);
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
        }else if(this.state === STATE.WIN){
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
          resetKeys(this.keyDown);
        }else if(this.state === STATE.PAUSED){
          this.state = STATE.PLAYING;
        }
        break;
      case KEY.Q: //q
        console.log("quit");
        cancelAnimationFrame(this.requestId);
        break;
      case KEY.UP:
      case KEY.DOWN:
      case KEY.LEFT:
      case KEY.RIGHT:
      case KEY.W:
      case KEY.A:
      case KEY.S:
      case KEY.D:
        if(this.state === STATE.PLAYING){ 
          this.keyDown[e.keyCode] = true;
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
      case KEY.DOWN:
      case KEY.LEFT:
      case KEY.RIGHT:
      case KEY.W:
      case KEY.A:
      case KEY.S:
      case KEY.D:
        if(this.state === STATE.PLAYING) {
          this.keyDown[e.keyCode] = false;
        }
        break;
      default:
        console.log(e.keyCode);
        break;
    }
  }
  

  

}