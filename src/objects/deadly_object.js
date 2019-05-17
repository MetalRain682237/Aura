import GameObject from "./game_object";
import { COLOR } from "../game/constants";

export default class DeadlyObject extends GameObject{
  constructor(options){
    options.color = options.color || COLOR.RED;
    super(options);
    this.deadly = true;
    this.damage = options.damage || 1;
  }
}