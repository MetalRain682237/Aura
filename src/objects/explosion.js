import GameObject from "./game_object";
import { DIRECTION, SPRITE_DURATION, IMAGES } from "../game/constants";

export default class Explosion extends GameObject{
  constructor(options){
    super(options);
    this.collidable = options.collidable || false;
    this.deadly = options.deadly || false;
    this.dead = false;
    this.hp = 0;
    this.maxHp= 0;
    this.damage = options.damage || 0;
    this.startFrame = undefined;
    this.duration = options.duration || SPRITE_DURATION / 4;
    this.velocity = DIRECTION.STATIONARY.slice();
    this.image = options.image || IMAGES.EXPLOSION;
  }

  draw(ctx, frame){
    if(this.startFrame === undefined) this.startFrame = frame;
    const delta = frame - this.startFrame;

    const imgNumber = Math.floor(delta / this.duration);
    if(imgNumber >= this.image.length){
      this.dead = true;
      return;
    }

    const img = this.image[imgNumber];

    super.drawImage(ctx, img);

  }

}