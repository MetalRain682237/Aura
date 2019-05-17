import GameObject from "./game_object";
import { IMAGES, DIRECTION, SPRITE_DURATION } from "../game/constants";

export default class Player extends GameObject{
  constructor(options){
    super(options);
    this.images = IMAGES.PLAYER;
    this.killable = true;
  }
  draw(ctx, frame){
    
    //figure out what image to key into
    let imgDirection;
    switch(this.facing.join(",")){
      case DIRECTION.N.join(","):
        imgDirection = "up";
        break;
      case DIRECTION.E.join(","):
        imgDirection = "right";
        break;
      case DIRECTION.W.join(","):
        imgDirection = "left";
        break;
      case DIRECTION.S.join(","):
        imgDirection = "down";
        break;
      default:
        imgDirection = "down";
        break;
    }

    let imgNumber;
    switch (Math.floor(frame / SPRITE_DURATION) % 4) {
      case 0:
        imgNumber = 0;
        break;
      case 1:
        imgNumber = 1;
        break;
      case 2:
        imgNumber = 2;
        break;
      case 3:
        imgNumber = 1;
        break;
      default:
        imgNumber = 0;
        break;
    }
    if(this.velocity.join(",") === DIRECTION.STATIONARY.join(","))
      imgNumber = 1;

    const img = this.images[imgDirection][imgNumber];

    ctx.beginPath();
    ctx.moveTo(...this.position);
    ctx.drawImage(img, ...this.position, this.width, this.height);
    ctx.closePath();
  }

  die(){
    this.dead = true;
    this.position = [-1, -1];
    this.velocity = [0, 0];
  }
  
}