import GameObject from "./game_object";
import { IMAGES, DIRECTION, SPRITE_DURATION } from "../game/constants";

export default class Player extends GameObject{
  constructor(options){
    options.hp = options.hp || 1;
    super(options);
    this.images = IMAGES.PLAYER;
    this.killable = true;
  }
  draw(ctx, frame){
    
    //figure out what image to key into
    const imgDirection = super.imageDirection();

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

    super.drawImage(ctx, img);
    super.drawHp(ctx);
  }

  die(){
    this.dead = true;
    this.velocity = [0, 0];
  }
  
}