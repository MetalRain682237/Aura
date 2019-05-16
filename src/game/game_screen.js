import { clear, drawBackground } from "../util/canvas_util";
import { COLOR, WIDTH, HEIGHT, PADDING } from "./constants";

export const gameScreen = (ctx, frame, game)=>{
  clear(ctx);
  drawBackground(ctx);
  drawBorder(ctx);
  drawGameState(ctx, frame, game);
};

const drawGameState = (ctx, frame, game)=>{
  game.draw(ctx, frame);
};

const drawBorder = (ctx)=>{
  ctx.beginPath();
  ctx.moveTo(PADDING,PADDING);
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.arc(PADDING,PADDING,PADDING,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(PADDING,PADDING);
  ctx.lineTo(WIDTH-PADDING, PADDING);
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.lineWidth = PADDING/2;
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.arc(WIDTH-PADDING,PADDING,PADDING,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(WIDTH - PADDING, PADDING);
  ctx.lineTo(WIDTH-PADDING, HEIGHT-PADDING);
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.lineWidth = PADDING/2;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.arc(WIDTH-PADDING,HEIGHT-PADDING,PADDING,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(WIDTH - PADDING, HEIGHT - PADDING);
  ctx.lineTo(PADDING, HEIGHT-PADDING);
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.lineWidth = PADDING/2;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.arc(PADDING,HEIGHT-PADDING,PADDING,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(PADDING, HEIGHT - PADDING);
  ctx.lineTo(PADDING, PADDING);
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.lineWidth = PADDING/2;
  ctx.stroke();
  ctx.closePath();

};