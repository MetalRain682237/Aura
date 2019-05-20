import { COLOR, FONT, WIDTH, HEIGHT, FPS, SPRITE_DURATION, MOSAIC_SIZE } from "./constants";
import { animateLine, clear, hexToRGB } from "../util/canvas_util";
import { random } from "../util/game_util";

export const winScreen = (ctx, frame, nextLevel = true, game) => {
  drawOverlay(ctx, frame);
  drawWin(ctx, frame, nextLevel);
  if(nextLevel){
    drawNextLevel(ctx);
  } else {
    drawSupremeVictory(ctx, game);
  }
};

const drawOverlay = (ctx, frame) => {
  const animationPosition = random(Math.floor(frame / (3.75 * SPRITE_DURATION)));
  let tile = animationPosition;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  for (let x = 0; x * MOSAIC_SIZE < WIDTH; x++) {
    for (let y = 0; y * MOSAIC_SIZE < HEIGHT; y++) {
      tile = random(tile);
      const alpha = 0.01 + (0.3 * random(tile));
      ctx.fillStyle = hexToRGB(COLOR.LIGHT_BLUE, alpha);
      ctx.fillRect(x * MOSAIC_SIZE, y * MOSAIC_SIZE, MOSAIC_SIZE, MOSAIC_SIZE);
    }
  }
  ctx.closePath();
};
const drawWin = (ctx, frame, nextLevel) => {
  const height = nextLevel ? 190 : 250; 
  ctx.beginPath();
  ctx.fillStyle = hexToRGB(COLOR.BACKGROUND, 0.7);
  ctx.fillRect(0, 150, WIDTH, height);
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "60px " + FONT;
  ctx.shadowColor = COLOR.LIGHT_BLUE;
  ctx.shadowBlur = 5 + (2 * (Math.sin(frame * 2 / FPS) + 1));
  const text = "YOU WIN";
  ctx.fillText(text, WIDTH / 2, 220);
  ctx.closePath();
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;
  animateLine(ctx, frame, 2 * FPS, startX + width, 172, -width);
  animateLine(ctx, frame, 2 * FPS, startX, 226, width);
};

const drawNextLevel = (ctx) => {
  ctx.beginPath();
  ctx.font = "30px " + FONT;
  ctx.fillText("Press ENTER to start the next level", WIDTH / 2, 320);
  ctx.closePath();
};
const drawSupremeVictory = (ctx) => {
  ctx.beginPath();
  ctx.font = "30px " + FONT;
  ctx.fillText("You have beaten every level! You are the best!", WIDTH / 2, 320);
  ctx.fillText("Press ENTER to restart", WIDTH / 2, 370);
  ctx.closePath();
};