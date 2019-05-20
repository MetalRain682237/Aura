import DeadlyObject from "./deadly_object";
import { SPRITE_DURATION, HORIZONTAL, COLOR } from "../game/constants";

export default class AlternatingLaserGate extends DeadlyObject{
  constructor(options){
    options.color = options.color || COLOR.RED;
    super(options);
    this.orientation = options.orientation || HORIZONTAL;
    this.totalDelta = undefined;
    this.duration = options.duration || SPRITE_DURATION*16;
    this.parity = options.parity || 0;
    this.deadly = (this.parity === 0) ? true : false;
  }
  update(delta){
    if(this.totalDelta === undefined){
      this.totalDelta = 0;
    }else{
      this.totalDelta+=delta;
    }
    this.deadly = ((this.parity === 0) === (this.totalDelta % this.duration < this.duration / 2));
  }
  draw(ctx, frame){
    if(this.deadly) super.draw(ctx, frame);
      let x, y, endX, endY;
    //draw gate posts?
    if(this.orientation === HORIZONTAL){
      x = this.position[0];
      endX = this.position[0] + this.width;
      y = this.position[1] + this.height/2;
      endY = y;
    }else{
      x = this.position[0] + this.width / 2;
      endX = x;
      y = this.position[1];
      endY = this.position[1] + this.height;
    }
    ctx.beginPath();
    ctx.shadowBlur = 0;
    ctx.fillStyle = COLOR.PURPLE;
    ctx.moveTo(x, y);
    ctx.arc(x,y,3, 0, Math.PI*2);
    ctx.moveTo(endX, endY);
    ctx.arc(endX,endY,3, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  }
}