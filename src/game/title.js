import { COLOR, FONT, WIDTH, FPS } from "./constants";
import { animateLine, clear } from "../util/canvas_util";

export const titleScreen = (ctx, frame)=>{
  clear(ctx);
  drawLogo(ctx);
  drawMenu(ctx, frame);
};

const drawLogo = (ctx)=>{
  ctx.beginPath();
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "50px " + FONT;
  ctx.fillText("Aura", WIDTH/ 2, 60);
  ctx.closePath();
};

const drawMenu = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "30px " + FONT;
  const text = "Press ENTER to begin";
  ctx.fillText(text, WIDTH/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;
  animateLine(ctx, frame, 2*FPS, startX, 210, width);
  animateLine(ctx, frame, 2*FPS, startX, 170, width);
 
};