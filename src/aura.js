import { WIDTH, HEIGHT } from "./game/constants";
import Game from "./game/game";

document.addEventListener("DOMContentLoaded", ()=>{
  const canvas = document.querySelector("#aura-canvas");
  //540p
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const scale = Math.min(window.innerHeight/HEIGHT, window.innerWidth/WIDTH);
  canvas.style.cssText = `width: ${WIDTH*scale}px; height: ${HEIGHT*scale}px;`;
  new Game(canvas.getContext("2d"));
  window.addEventListener("resize", () => {
    const scale = Math.min(window.innerHeight / HEIGHT, window.innerWidth / WIDTH);
    canvas.style.cssText = `width: ${WIDTH * scale}px; height: ${HEIGHT * scale}px;`;
  });
});
