import { COLOR, FONT, WIDTH, FPS } from "./constants";
import { animateLine, clear } from "../util/canvas_util";

export const loadingScreen = (ctx, frame)=>{
  clear(ctx);
  //drawLogo(ctx);
  drawLoading(ctx, frame);
};

const drawLogo = (ctx) => {
  ctx.shadowColor = COLOR.LIGHT_BLUE;
  ctx.shadowBlur = 5;
  ctx.beginPath();
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "50px " + FONT;
  ctx.fillText("Aura", WIDTH / 2, 60);
  ctx.closePath();
};

const drawLoading = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "30px " + FONT;
  const text = "LOADING...";
  ctx.fillText(text, WIDTH/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;
  animateLine(ctx, frame, 2*FPS, startX, 210, width);
  animateLine(ctx, frame, 2*FPS, startX, 170, width);
 
};