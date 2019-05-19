import DeadlyObject from "./deadly_object";
import { compare } from "../util/game_util";
import { IMAGES, SPRITE_DURATION } from "../game/constants";

export default class Enemy extends DeadlyObject{
  constructor(options){
    options.hp = options.hp || 1;
    super(options);
    this.image = options.image || IMAGES.ENEMIES.ROBOT;
    this.killable = true;
    this.damage = 1;
    this.moveSpeed = options.moveSpeed ||  this.moveSpeed / 2;
  }

  draw(ctx, frame){
    const imgDirection = super.imageDirection();
    const imgNumber= (Math.floor(frame / SPRITE_DURATION) % 4);
    const img = this.image[imgDirection][imgNumber];

    super.drawImage(ctx, img);
    super.drawHp(ctx);
  }
  die(){
    this.velocity = [0,0];
    this.dead = true;
  }
  moveToward(object){
    const [startX, startY, width, height] = this.getHitbox();
    const [otherStartX, otherStartY, otherWidth, otherHeight] = object.getHitbox();
    if(otherStartX + otherWidth/2 <= startX + width && otherStartX + otherWidth/2 >= startX ){
      this.velocity[0] = 0;
    } else if(startX < otherStartX + otherWidth/2){
      this.velocity[0] = 1;
    } else{
      this.velocity[0] = -1;
    }
    if (otherStartY + otherHeight / 2 <= startY + height && otherStartY + otherHeight / 2 >= startY) {
      this.velocity[1] = 0;
    } else if (startY < otherStartY + otherHeight / 2) {
      this.velocity[1] = 1;
    } else {
      this.velocity[1] = -1;
    }
  }
}