import { DIRECTION, SPRITE_DURATION } from "../game/constants";
import { random } from "../util/game_util";
import Enemy from "./enemy";

export default class DumbEnemy extends Enemy{
  constructor(options){
    super(options);
    this.previousAIDelta = -1;
    this.totalAIDelta = undefined;
  }
  moveToward(target, obstacles, delta){
    if(this.totalAIDelta === undefined){
      this.totalAIDelta = 0;
    } else{
      this.totalAIDelta += delta;
    }
    const directions = [
      DIRECTION.N.slice(),
      DIRECTION.NE.slice(),
      DIRECTION.NW.slice(),
      DIRECTION.S.slice(),
      DIRECTION.SE.slice(),
      DIRECTION.SW.slice(),
      DIRECTION.E.slice(),
      DIRECTION.W.slice()
    ];
    const step = Math.floor(this.totalAIDelta / (SPRITE_DURATION * 8));
    if(step > this.previousAIDelta){
      this.previousAIDelta = step;
      const randomInterval = Math.min(Math.floor(random(delta * this.position[0] * this.position[1]) * directions.length), directions.length);
      this.velocity = directions[randomInterval];
    }
  }
}