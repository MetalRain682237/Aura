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
    this.collidable = options.collidable !== undefined ? options.collidable : true;
    this.moveSpeed = options.moveSpeed || MOVE_SPEED;
    this.killable = false;
    this.deadly = false;
    this.dead = false;
    this.hp = options.hp || 0;
    this.maxHp = options.hp || 0;
    this.damage = options.damage || 0;
    this.grace = options.grace || [[0, 0], [0, 0]]; //grace pixels in each direction for hitbox
                                                    //[[startx, endx], [starty, endy]]
  }
  update(delta){} //default does nothing
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
  drawHp(ctx){
    if(!this.hp || this.dead) return;
    const [startX, startY, width, height] = this.getHitbox();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#00ff00";
    ctx.shadowBlur = 0;

    ctx.moveTo(startX, startY - 7);
    ctx.lineTo(startX + (width * this.hp / this.maxHp), startY - 7);
    ctx.stroke();
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
  setFacing(direction){
    if (direction.join(",") === DIRECTION.STATIONARY.join(",")) {
      //leave facing direction alone
    } else if (direction.join(",") === DIRECTION.N.join(",") || direction.join(",") === DIRECTION.W.join(",") || direction.join(",") === DIRECTION.E.join(",") || direction.join(",") === DIRECTION.S.join(",")) {
      this.facing = direction.slice();
    } else if (direction.join(",") === DIRECTION.NW.join(",")) {
      this.facing = DIRECTION.N;
    } else if (direction.join(",") === DIRECTION.NE.join(",")) {
      this.facing = DIRECTION.N;
    } else if (direction.join(",") === DIRECTION.SW.join(",")) {
      this.facing = DIRECTION.W;
    } else if (direction.join(",") === DIRECTION.SE.join(",")) {
      this.facing = DIRECTION.E;
    } else {
      this.facing = DIRECTION.S;
    }
  }
  moveToNextPosition(delta){
    this.setFacing(this.velocity);
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
    this.setFacing(this.velocity);
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
    this.setFacing(this.velocity);
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
  getHitbox(){
    return [this.position[0] + this.grace[0][0], this.position[1] + this.grace[1][0], this.width - this.grace[0][1] - this.grace[0][0], this.height - this.grace[1][1] - this.grace[1][0]];
  }
  getHitboxAt(position){
    return [position[0] + this.grace[0][0], position[1] + this.grace[1][0], this.width - this.grace[0][1] - this.grace[0][0], this.height - this.grace[1][1] - this.grace[1][0]];
  }
}