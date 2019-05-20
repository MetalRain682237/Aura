import { WIDTH, HEIGHT, DIRECTION, CANVAS, KEY, PADDING, IMAGES, MOVE_SPEED } from "../game/constants";
import { checkBounds, boxCollision, directionForKeys, bulletVelocityForKeys, resetKeys } from "../util/game_util";
import Player from "./player";
import GameObject from "./game_object";
import DeadlyObject from "./deadly_object";
import Enemy from "./enemy";
import Bullet from "./bullet";
import Explosion from "./explosion";

export default class GameState{
  constructor(){
    this.player = new Player({
      position: [WIDTH/2 - PADDING, HEIGHT/2 - PADDING],
      velocity: DIRECTION.STATIONARY.slice(),
      facing: DIRECTION.S,
      width: 21,
      height: 34.5,
      grace: [[3,3],[3,3]],
      hp: 100,
      moveSpeed: 1.2 * MOVE_SPEED
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
        grace: [[3,3],[0,0]],
        collidable: false
      }),
      
    ];
    this.enemies = [
      new Enemy({
        position: [100 , 100],
        velocity: [0, 0],
        width: 48,
        height: 48,
        grace: [[3,3], [3, 0]],
        hp: 100,
        image: IMAGES.ENEMIES.ROBOT,
        moveSpeed: 0.7 * MOVE_SPEED
      }),
      new Enemy({
        position: [1100 , 100],
        velocity: [0, 0],
        width: 48,
        height: 48,
        hp: 100,
        grace: [[3,3], [3, 0]],
        image: IMAGES.ENEMIES.ROBOT,
        moveSpeed: 0.7 *MOVE_SPEED
      }),
      new Enemy({
        position: [100 , 600],
        velocity: [0, 0],
        width: 48,
        height: 48,
        hp: 100,
        grace: [[3,3], [3, 0]],
        image: IMAGES.ENEMIES.ROBOT,
        moveSpeed: 0.7 * MOVE_SPEED
      }),
      new Enemy({
        position: [1100 , 600],
        velocity: [0, 0],
        width: 48,
        height: 48,
        hp: 100,
        grace: [[3,3], [3, 0]],
        image: IMAGES.ENEMIES.ROBOT,
        moveSpeed: 0.7 *MOVE_SPEED
      }),
    ];
    this.bullets = [];
    this.explosions = [];
  }
  update(delta, keydown){
    this.updatePlayer(delta, keydown);
    this.shoot(delta, keydown);
    this.bullets.forEach(bullet=>this.updateBullet(delta, bullet));
    this.enemies.forEach((enemy, i)=>this.updateEnemy(delta, enemy, i));
    this.purgeDeadObjects();
  }
  shoot(delta, keydown){
    if(this.player.canFireBullet()){
      const velocity = bulletVelocityForKeys(keydown);
      const [playerX, playerY, playerWidth, playerHeight] = this.player.getHitbox();
      if(velocity.join(",")!==DIRECTION.STATIONARY.join(",")){
        let [x,y] = [0,0];

        if (velocity[0] === -1) x = playerX - 1;
        else if (velocity[0] === 1) x = playerX + playerWidth;
        else x = 1 + playerX + playerWidth/2;

        if (velocity[1] === -1) y = playerY - 1;
        else if (velocity[1] === 1) y = playerY + playerHeight;
        else y = 1 + playerY + playerHeight/2;

        this.bullets.push(new Bullet({
          position: [x, y],
          velocity,
          width: 4,

        }));
        this.player.setBulletDelay();
      }
    }
  }
  purgeDeadObjects(){
    this.enemies = this.enemies.filter(enemy => !enemy.dead);
    this.bullets = this.bullets.filter(bullet => !bullet.dead);
    this.explosions = this.explosions.filter(explosion => !explosion.dead);
  }
  killEnemy(enemy){
    const [x, y, width, height] = enemy.getHitbox();
    this.explosions.push(new Explosion({
      position: [x,y],
      width,
      height
    }));
    enemy.die();
    
  }
  updateBullet(delta, bullet){
    const nextPosition = bullet.nextPositionAsObject(delta);
    if(!checkBounds(nextPosition)){
      bullet.dead = true;
      return;
    } 
    this.obstacles.forEach(obstacle=>{
      if(obstacle.collidable && boxCollision(nextPosition, obstacle)){
        bullet.dead = true;
        bullet.damage = 0;
        bullet.deadly = false;
      }
    });
    if(bullet.dead) return;
    bullet.moveToNextPosition(delta);
  }
  updateEnemy(delta, enemy, enemyNumber){

    enemy.moveToward(this.player); //update velocity

    const nextPosition = enemy.nextPositionAsObject(delta);

    if (!this.checkCollisions(nextPosition, enemyNumber)) { //perform collissions on the next position
      enemy.setHP(nextPosition.hp); //if they can move, update their damage and move them
      enemy.moveToNextPosition(delta);
      if(nextPosition.dead){
        this.killEnemy(enemy); //if they would die, kill them
      }
    } else {
      if (nextPosition.dead) { //always kill enemy if they would die
        this.killEnemy(enemy);
        enemy.position = nextPosition.position;
      } else { //otherwise, try moving horizontally and vertically instead, with the same logic
        if (enemy.velocity[0] !== 0 && enemy.velocity[1] !== 0) {
          const xMove = enemy.nextXPositionAsObject(delta);
          if (!this.checkCollisions(xMove, enemyNumber)) {
            enemy.setHP(xMove.hp);
            enemy.moveToNextXPosition(delta);
            if(xMove.dead){
              this.killEnemy(enemy);
            }
          } else if (xMove.dead) {
            this.killEnemy(enemy);
            enemy.position = xMove.position;
          } else {
            const yMove = enemy.nextYPositionAsObject(delta);
            if (!this.checkCollisions(yMove, enemyNumber)) {
              enemy.setHP(yMove.hp);
              enemy.moveToNextYPosition(delta);
            }
            if (yMove.dead) {
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
    if(enemy.hp <= 0) this.killEnemy(enemy); //kill the enemy!
  }

  killPlayer(keydown){
    this.player.die();
    resetKeys(keydown);
  }

  updatePlayer(delta, keydown){
    this.player.updateBulletDelay(delta);
    this.player.setVelocity(directionForKeys(keydown));
    const nextPosition = this.player.nextPositionAsObject(delta);
    if (!this.checkCollisions(nextPosition)) {
      this.player.setHP(nextPosition.hp);
      this.player.moveToNextPosition(delta);
    } else {
      if (nextPosition.hp <= 0) {
        this.killPlayer(keydown);
        this.player.position = nextPosition.position;
      } else {
        if (this.player.velocity[0] !== 0 && this.player.velocity[1] !== 0) {
          const xMove = this.player.nextXPositionAsObject(delta);
          if (!this.checkCollisions(xMove)) {
            this.player.setHP(xMove.hp);
            this.player.moveToNextXPosition(delta);
          } else if (xMove.hp <= 0) {
            this.killPlayer(keydown);
            this.player.position = xMove.position;
          } else {
            const yMove = this.player.nextYPositionAsObject(delta);
            if (!this.checkCollisions(yMove)) {
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
    let obstructed = false;
    if(!checkBounds(object)){
      obstructed = true;
    }
    this.obstacles.forEach(obstacle=>{
      if (boxCollision(obstacle, object)) {
        if (obstacle.deadly && object.killable) {
          object.hp -= obstacle.damage;
        }
        obstructed = obstructed || obstacle.collidable;
      } 
    });
    
    if(enemyNumber === false){ //only collide enemies with the player
      this.enemies.forEach((enemy, i)=>{
        if (enemyNumber !== i && boxCollision(enemy, object)) {
          if (enemy.deadly && object.killable) {
            object.hp -= enemy.damage;
          }
          obstructed = obstructed || enemy.collidable;
        }
      });
    }

    if(object.killable && enemyNumber !== false){
      this.bullets.forEach(bullet=>{
        if(boxCollision(bullet, object) && bullet.deadly){
          object.hp -= bullet.damage;
          bullet.dead = true;
        }
      });
    }

    return obstructed;
  }
  draw(ctx, frame){
    this.obstacles.forEach(obstacle=>obstacle.draw(ctx, frame));
    this.player.draw(ctx, frame);
    this.enemies.forEach(enemy=>enemy.draw(ctx, frame));
    this.bullets.forEach(bullet => bullet.draw(ctx, frame));
    this.explosions.forEach(explosion => explosion.draw(ctx, frame));
    //draw HP bars last so they go over things
    this.player.drawHp(ctx);
    this.enemies.forEach(enemy=>enemy.drawHp(ctx));
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