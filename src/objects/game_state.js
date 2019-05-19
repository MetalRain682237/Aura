import { WIDTH, HEIGHT, DIRECTION, CANVAS, KEY, PADDING, IMAGES } from "../game/constants";
import { checkBounds, boxCollision, directionForKeys } from "../util/game_util";
import Player from "./player";
import GameObject from "./game_object";
import DeadlyObject from "./deadly_object";
import Enemy from "./enemy";

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
        width: 149,
        height: 3
      }),
      new GameObject({
        position: [424, 458],
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
        position: [849, 308],
        velocity: [0,0],
        width: 3,
        height: 153,
        grace: [[3,3],[0,0]]
      }),
      
    ];
    this.enemies = [
      new Enemy({
        position: [100 , 100],
        velocity: [0, 0],
        width: 64,
        height: 64,
        grace: [[5, 5], [5, 0]],
        hp: 100,
        image: IMAGES.ENEMIES.ROBOT
      }),
      new Enemy({
        position: [1100 , 100],
        velocity: [0, 0],
        width: 64,
        height: 64,
        hp: 100,
        grace: [[5, 5], [5, 0]],
        image: IMAGES.ENEMIES.ROBOT
      }),
      new Enemy({
        position: [100 , 600],
        velocity: [0, 0],
        width: 64,
        height: 64,
        hp: 100,
        grace: [[5, 5], [5, 0]],
        image: IMAGES.ENEMIES.ROBOT
      }),
      new Enemy({
        position: [1100 , 600],
        velocity: [0, 0],
        width: 64,
        height: 64,
        hp: 100,
        grace: [[5, 5], [5, 0]],
        image: IMAGES.ENEMIES.ROBOT
      }),
    ];
  }
  update(delta, keydown){
    this.enemies.forEach((enemy, i)=>this.updateEnemy(delta, enemy, i));
    this.updatePlayer(delta, keydown);

  }
  killEnemy(enemy){
    enemy.die();
    this.enemies = this.enemies.filter(value => (value !== enemy));
  }
  updateEnemy(delta, enemy, enemyNumber){
    enemy.moveToward(this.player);
    const nextPosition = enemy.nextPositionAsObject(delta);
    if (this.checkCollisions(nextPosition, enemyNumber)) {
      enemy.setHP(nextPosition.hp);
      enemy.moveToNextPosition(delta);
    } else {
      if (nextPosition.hp <= 0) {
        this.killEnemy(enemy);
        enemy.position = nextPosition.position;
      } else {
        if (enemy.velocity[0] !== 0 && enemy.velocity[1] !== 0) {
          const xMove = enemy.nextXPositionAsObject(delta);
          if (this.checkCollisions(xMove, enemyNumber)) {
            enemy.setHP(xMove.hp);
            enemy.moveToNextXPosition(delta);
          } else if (xMove.hp <= 0) {
            this.killEnemy(enemy);
            enemy.position = xMove.position;
          } else {
            const yMove = enemy.nextYPositionAsObject(delta);
            if (this.checkCollisions(yMove, enemyNumber)) {
              enemy.setHP(yMove.hp);
              enemy.moveToNextYPosition(delta);
            } else if (yMove.hp <= 0) {
              this.killEnemy(enemy);
              enemy.position = yMove.position;
            }else{
              enemy.setHP(yMove.hp);
            }
          }
        } else {
          enemy.setHP(nextPosition.hp);
        }
      }
    }
  }

  killPlayer(keydown){
    this.player.die();
    keydown[KEY.UP] = false;
    keydown[KEY.LEFT] = false;
    keydown[KEY.RIGHT] = false;
    keydown[KEY.DOWN] = false;
  }

  updatePlayer(delta, keydown){
    this.player.setVelocity(directionForKeys(keydown));
    const nextPosition = this.player.nextPositionAsObject(delta);
    if (this.checkCollisions(nextPosition)) {
      this.player.setHP(nextPosition.hp);
      this.player.moveToNextPosition(delta);
    } else {
      if (nextPosition.hp <= 0) {
        this.killPlayer(keydown);
        this.player.position = nextPosition.position;
      } else {
        if (this.player.velocity[0] !== 0 && this.player.velocity[1] !== 0) {
          const xMove = this.player.nextXPositionAsObject(delta);
          if (this.checkCollisions(xMove)) {
            this.player.setHP(xMove.hp);
            this.player.moveToNextXPosition(delta);
          } else if (xMove.hp <= 0) {
            this.killPlayer(keydown);
            this.player.position = xMove.position;
          } else {
            const yMove = this.player.nextYPositionAsObject(delta);
            if (this.checkCollisions(yMove)) {
              this.player.setHP(yMove.hp);
              this.player.moveToNextYPosition(delta);
            } else if (yMove.hp <= 0) {
              this.killPlayer(keydown);
              this.player.position = yMove.position;
            } else {
              this.player.setHP(yMove.hp);
              this.stopPlayer(keydown);
            }
          }
        } else {
          this.player.setHP(nextPosition.hp);
          this.stopPlayer(keydown);
        }
      }
    }
  }
  stopPlayer(keydown){
    this.setPlayerVelocity(DIRECTION.STATIONARY.slice());
  }
  checkCollisions(object, enemyNumber = false){
    let unobstructed = true;
    if(!checkBounds(object)){
      unobstructed = false;
    }
    for(let i = 0; i < this.obstacles.length; ++i){
      if(boxCollision(this.obstacles[i], object)){
        if(this.obstacles[i].deadly && object.killable){
          object.hp -= this.obstacles[i].damage;
        }
        unobstructed = false;
      } 
    }
    // if(isEnemy) return unobstructed;
    for (let i = 0; i < this.enemies.length; ++i) {
      if (enemyNumber !== i && boxCollision(this.enemies[i], object)) {
        if (this.enemies[i].deadly && object.killable && enemyNumber === false) {
          object.hp -= this.enemies[i].damage;
        }
        unobstructed = false;
      }
    }
    return unobstructed;
  }
  draw(ctx, frame){
    this.obstacles.forEach(obstacle=>obstacle.draw(ctx, frame));
    this.player.draw(ctx, frame);
    this.enemies.forEach(enemy=>enemy.draw(ctx, frame));
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