import { WIDTH, HEIGHT, DIRECTION, CANVAS, KEY, PADDING } from "../game/constants";
import { checkBounds, boxCollision, directionForKeys } from "../util/game_util";
import Player from "./player";
import GameObject from "./game_object";
import DeadlyObject from "./deadly_object";

export default class GameState{
  constructor(){
    this.player = new Player({
      position: [WIDTH/2 - PADDING, HEIGHT/2 - PADDING],
      velocity: DIRECTION.STATIONARY.slice(),
      facing: DIRECTION.S,
      width: 28,
      height: 46,
      grace: [[5,5],[5,5]]
    });
    this.obstacles = [
      new GameObject({
        position: [570, 197],
        velocity: [0,0],
        width: 3,
        height: 111
      }),
      new GameObject({
        position: [700, 197],
        velocity: [0,0],
        width: 3,
        height: 111
      }),
      new GameObject({
        position: [424, 308],
        velocity: [0,0],
        width: 148,
        height: 3
      }),
      new GameObject({
        position: [424, 456],
        velocity: [0,0],
        width: 426,
        height: 3
      }),

      new GameObject({
        position: [700, 308],
        velocity: [0,0],
        width: 148,
        height: 3
      }),
      
      new DeadlyObject({
        position: [848, 308],
        velocity: [0,0],
        width: 3,
        height: 151,
        grace: [[3,3],[0,0]]
      }),
      
    ];
  }
  update(delta, keydown){
    this.player.setVelocity(directionForKeys(keydown));
    const nextPosition = this.player.nextPositionAsObject(delta);
    if(this.checkCollisions(nextPosition)){
      this.player.moveToNextPosition(delta);
    }
    else{
      if(nextPosition.dead){
        this.player.die();
        keydown[KEY.UP] = false;
        keydown[KEY.LEFT] = false;
        keydown[KEY.RIGHT] = false;
        keydown[KEY.DOWN] = false;
        this.player.position = nextPosition.position;
      }else{
        if(this.player.velocity[0] !== 0 && this.player.velocity[1] !== 0){
          const xMove = this.player.nextXPositionAsObject(delta);
          if(this.checkCollisions(xMove)) {
            this.player.moveToNextXPosition(delta);
          }
          else{
            const yMove = this.player.nextYPositionAsObject(delta);
            if (this.checkCollisions(yMove)){
              this.player.moveToNextYPosition(delta);
            } 
            else this.stopPlayer(keydown);
          }
        }else{
          this.stopPlayer(keydown);
        }
        
      }
    }
  }
  stopPlayer(keydown){
    this.setPlayerVelocity(DIRECTION.STATIONARY.slice());
  }
  checkCollisions(object){
    if(!checkBounds(object)){
      return false;
    }
    for(let i = 0; i < this.obstacles.length; ++i){
      if(boxCollision(this.obstacles[i], object)){
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