import { WIDTH, HEIGHT } from "./game/constants";
import Game from "./game/game";

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.querySelector("#aura-canvas");
  //540p
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  new Game(canvas.getContext("2d"));
});