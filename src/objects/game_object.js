import { scaleVector } from "../util/game_util";
import { DIRECTION, MOVE_SPEED, COLOR, FPS } from "../game/constants";

export default class GameObject{
  constructor(options){
    this.position = options.position || [0,0];
    this.velocity = options.velocity || DIRECTION.STATIONARY.slice();
    this.facing = options.facing || DIRECTION.S.slice();
    this.width = options.width || 10;
    this.height = options.height || 10;
    this.color = options.color || COLOR.LIGHT_BLUE;
    this.collidable = options.collidable || true;
    this.moveSpeed = options.moveSpeed || MOVE_SPEED;
    this.killable = false;
    this.deadly = false;
    this.dead = false;
    this.hp = options.hp || 1;
    this.damage = options.damage || 0;
    this.grace = options.grace || [[0, 0], [0, 0]]; //grace pixels in each direction for hitbox
                                                    //[[startx, endx], [starty, endy]]
  }

  setHP(hp){
    this.hp = hp;
    if(hp < 0) this.dead = true;
  }
  draw(ctx, frame){
    ctx.beginPath();
    ctx.moveTo(...this.position);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5 + (2 * (Math.sin(frame * 2 / FPS) + 1));
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
  imageDirection(){
    switch (this.facing.join(",")) {
      case DIRECTION.N.join(","):
        return "up";
      case DIRECTION.E.join(","):
        return "right";
      case DIRECTION.W.join(","):
        return "left";
      case DIRECTION.S.join(","):
        return "down";
      default:
        return "down";
    }
  }

  nextPosition(delta){
    const scaledVelocity = scaleVector(scaleVector(this.velocity, delta), this.moveSpeed);
    return [this.position[0] + scaledVelocity[0], this.position[1] + scaledVelocity[1]];
  }
  nextPositionAsObject(delta){
    return {position: this.nextPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace, hp: this.hp};
  }
  moveToNextPosition(delta){
    if(this.velocity.join(",") === DIRECTION.STATIONARY.join(",")){
      //leave facing direction alone
    }else if(this.velocity.join(",") === DIRECTION.N.join(",") || this.velocity.join(",") === DIRECTION.W.join(",") || this.velocity.join(",") === DIRECTION.E.join(",") || this.velocity.join(",") === DIRECTION.S.join(",")){
      this.facing = this.velocity.slice();
    }else if(this.velocity.join(",") === DIRECTION.NW.join(",")){
      this.facing = DIRECTION.W;
    }else if(this.velocity.join(",") === DIRECTION.NE.join(",")){
      this.facing = DIRECTION.E;
    }else{
      this.facing = DIRECTION.S;
    }
    this.position = this.nextPosition(delta);
  }

  nextXPosition(delta){
    const scaledVelocity = scaleVector(scaleVector(this.velocity, delta), this.moveSpeed);
    return [this.position[0] + scaledVelocity[0], this.position[1]];
  }
  nextXPositionAsObject(delta){
    return { position: this.nextXPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace, hp: this.hp};
  }
  moveToNextXPosition(delta){
    if(this.velocity.join(",") === DIRECTION.STATIONARY.join(",")){
      //leave facing direction alone
    }else if(this.velocity.join(",") === DIRECTION.N.join(",") || this.velocity.join(",") === DIRECTION.W.join(",") || this.velocity.join(",") === DIRECTION.E.join(",") || this.velocity.join(",") === DIRECTION.S.join(",")){
      this.facing = this.velocity.slice();
    }else if(this.velocity.join(",") === DIRECTION.NW.join(",")){
      this.facing = DIRECTION.W;
    }else if(this.velocity.join(",") === DIRECTION.NE.join(",")){
      this.facing = DIRECTION.E;
    }else{
      this.facing = DIRECTION.S;
    }
    this.position = this.nextXPosition(delta);
  }

  nextYPosition(delta) {
    const scaledVelocity = scaleVector(scaleVector(this.velocity, delta), this.moveSpeed);
    return [this.position[0], this.position[1] + scaledVelocity[1]];
  }
  nextYPositionAsObject(delta) {
    return { position: this.nextYPosition(delta), width: this.width, height: this.height, collidable: this.collidable, killable: this.killable, grace: this.grace, hp: this.hp };
  }
  moveToNextYPosition(delta) {
    if (this.velocity.join(",") === DIRECTION.STATIONARY.join(",")) {
      //leave facing direction alone
    } else if (this.velocity.join(",") === DIRECTION.N.join(",") || this.velocity.join(",") === DIRECTION.W.join(",") || this.velocity.join(",") === DIRECTION.E.join(",") || this.velocity.join(",") === DIRECTION.S.join(",")) {
      this.facing = this.velocity.slice();
    } else if (this.velocity.join(",") === DIRECTION.NW.join(",")) {
      this.facing = DIRECTION.W;
    } else if (this.velocity.join(",") === DIRECTION.NE.join(",")) {
      this.facing = DIRECTION.E;
    } else {
      this.facing = DIRECTION.S;
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