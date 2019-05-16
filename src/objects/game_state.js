import { WIDTH, HEIGHT, DIRECTION, CANVAS, KEY } from "../game/constants";
import { checkBounds } from "../util/game_util";
import Player from "./player";

export default class GameState{
  constructor(){
    this.player = new Player({
      position: [WIDTH/2, HEIGHT/2],
      velocity: DIRECTION.STATIONARY.slice(),
      facing: DIRECTION.S,
      width: 28,
      height: 46
    });
  }
  update(delta, keydown){
    if(checkBounds(this.player.nextPositionAsObject(delta))) this.player.moveToNextPosition(delta);
    else{
      this.setPlayerVelocity(DIRECTION.STATIONARY.slice());
      keydown[KEY.UP] = false;
      keydown[KEY.DOWN] = false;
      keydown[KEY.LEFT] = false;
      keydown[KEY.RIGHT] = false;
    }
  }
  draw(ctx, frame){
    this.player.draw(ctx, frame);
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