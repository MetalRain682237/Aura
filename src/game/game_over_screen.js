import { COLOR, FONT, WIDTH, HEIGHT, FPS, SPRITE_DURATION, MOSAIC_SIZE } from "./constants";
import { animateLine, clear, hexToRGB } from "../util/canvas_util";
import { random } from "../util/game_util";

export const gameOverScreen = (ctx, frame) => {
  drawOverlay(ctx, frame);
  drawGameOver(ctx, frame);
  drawPlayAgain(ctx);
};

const drawOverlay = (ctx, frame)=>{
  const animationPosition = random(Math.floor(frame / (3.75*SPRITE_DURATION)));
  let tile = animationPosition;
  ctx.beginPath();
  for(let x = 0; x * MOSAIC_SIZE < WIDTH; x++ ){
    for(let y = 0; y * MOSAIC_SIZE < HEIGHT; y++){
      tile=random(tile);
      const alpha = 0.2 + (0.7 * random(tile));
      ctx.fillStyle = hexToRGB(COLOR.BACKGROUND, alpha);
      ctx.fillRect(x*MOSAIC_SIZE, y*MOSAIC_SIZE, MOSAIC_SIZE, MOSAIC_SIZE);
    }
  }
  ctx.closePath();
};
const drawGameOver = (ctx, frame) => {
  ctx.beginPath();
  ctx.strokeStyle = COLOR.RED;
  ctx.fillStyle = COLOR.RED;
  ctx.textAlign = "center";
  ctx.font = "60px " + FONT;
  const text = "YOU DIED";
  ctx.fillText(text, WIDTH / 2, 220);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;
  animateLine(ctx, frame, 2 * FPS, startX + width, 172, -width);
  animateLine(ctx, frame, 2 * FPS, startX, 226, width);
};

const drawPlayAgain = (ctx) =>{
  ctx.beginPath();
  ctx.font = "30px " + FONT;
  ctx.fillText("Press ENTER to restart", WIDTH/2, 320);
  ctx.closePath();

};