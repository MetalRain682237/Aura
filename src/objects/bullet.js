import DeadlyObject from "./deadly_object";
import { scaleVector } from "../util/game_util";
import { COLOR } from "../game/constants";

export default class Bullet extends DeadlyObject{
  constructor(options){
    options.damage = options.damage || 10;
    options.color = options.color || COLOR.BULLET;
    options.collidable = options.collidable || false;
    options.moveSpeed = options.moveSpeed || 10;
    super(options);
    this.height = this.width;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = COLOR.WHITE;
    ctx.lineWidth = this.width;
    ctx.lineCap = "round";
    const velocity = scaleVector(this.velocity, this.moveSpeed);

    const endX = this.position[0] - velocity[0]; //where it came from
    const endY = this.position[1] - velocity[1];

    ctx.moveTo(...this.position);

    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.closePath();
    ctx.lineCap = "butt";
  }
  getHitbox(){
    return [this.position[0] + this.grace[0][0], this.position[1] + this.grace[1][0], 2*this.width - this.grace[0][1] - this.grace[0][0], 2*this.height - this.grace[1][1] - this.grace[1][0]];
  }
  
}