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
  ctx.shadowColor = COLOR.LIGHT_BLUE;
  ctx.shadowBlur = 10;
  ctx.font = "50px " + FONT;
  ctx.fillText("AURA", WIDTH/ 2, 60);
  ctx.closePath();
};

const drawMenu = (ctx, frame)=>{
  ctx.beginPath();
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "30px " + FONT;
  const text = "Press ENTER to begin";
  ctx.shadowColor = COLOR.LIGHT_BLUE;
  ctx.shadowBlur = 10;
  ctx.fillText(text, WIDTH/2, 200);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;
  animateLine(ctx, frame, 2*FPS, startX, 210, width);
  animateLine(ctx, frame, 2*FPS, startX, 170, width);

  ctx.beginPath();
  ctx.textAlign = "left";
  ctx.fillText("Controls:", startX, 300);
  ctx.font = "20px " + FONT;
  ctx.fillText("- Arrows to MOVE", startX + 20, 340);
  ctx.fillText("- WASD to SHOOT", startX + 20, 370);
  ctx.fillText("- P to PAUSE", startX + 20, 400);
  ctx.font = "30px " + FONT;
  ctx.fillText("Rules:", startX, 460);
  ctx.font = "20px " + FONT;
  ctx.fillText("- Kill all the things", startX + 20, 500);
  ctx.fillText("- Don't get hit", startX + 20, 530);
  ctx.fillText("- Don't touch the lasers", startX + 20, 560);
  ctx.closePath();
};