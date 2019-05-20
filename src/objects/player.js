import GameObject from "./game_object";
import { IMAGES, DIRECTION, SPRITE_DURATION, FPS } from "../game/constants";

export default class Player extends GameObject{
  constructor(options){
    options.hp = options.hp || 1;
    super(options);
    this.images = IMAGES.PLAYER;
    this.killable = true;
    this.bulletRate = FPS / 6;
    this.bulletDelay = 0;
  }
  canFireBullet(){
    return this.bulletDelay <= 0;
  }
  setBulletDelay(){
    this.bulletDelay = this.bulletRate;
  }
  updateBulletDelay(delta){
    this.bulletDelay = Math.max(0, this.bulletDelay - delta);
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
  }

  die(){
    this.dead = true;
    this.velocity = [0, 0];
  }
  
}