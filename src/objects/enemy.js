import DeadlyObject from "./deadly_object";
import { compare } from "../util/game_util";
import { IMAGES } from "../game/constants";

export default class Enemy extends DeadlyObject{
  constructor(options){
    super(options);
    this.image = options.image;// || IMAGES.enemy[0];
    this.killable = true;
    this.damage = 1;
    this.moveSpeed = options.moveSpeed ||  this.moveSpeed / 2;
  }

  // draw(ctx, frame){
  //   const imgDirection = super.imageDirection();
  //   let imgNumber;
  //   switch (Math.floor(frame / SPRITE_DURATION) % 4) {
  //     case 0:
  //       imgNumber = 0;
  //       break;
  //     case 1:
  //       imgNumber = 1;
  //       break;
  //     case 2:
  //       imgNumber = 2;
  //       break;
  //     case 3:
  //       imgNumber = 1;
  //       break;
  //     default:
  //       imgNumber = 0;
  //       break;
  //   }

  //   if (this.velocity.join(",") === DIRECTION.STATIONARY.join(","))
  //     imgNumber = 1;

  //   const img = this.images[imgDirection][imgNumber];

  //   super.drawImage(ctx, img);
  // }
  die(){
    this.velocity = [0,0];
    this.dead = true;
  }
  moveToward(object){
    this.velocity[0] = compare(this.position[0] + this.width/2, object.position[0] + object.width/2);
    this.velocity[1] = compare(this.position[1] + this.width/2, object.position[1] + object.width/2);
  }
}