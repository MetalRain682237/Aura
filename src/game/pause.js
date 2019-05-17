import { COLOR, FONT, WIDTH, FPS, HEIGHT, PADDING } from "./constants";
import { animateLine, hexToRGB} from "../util/canvas_util";


export const pauseScreen = (ctx, frame) => {
  drawPause(ctx, frame);
};

const drawPause = (ctx, frame) => {
  ctx.beginPath();
  ctx.strokeStyle = COLOR.LIGHT_BLUE;
  ctx.textAlign = "center";
  ctx.font = "50px " + FONT;
  const text = "PAUSED";
  const width = ctx.measureText(text).width;
  const startX = WIDTH / 2 - width / 2;

  ctx.fillStyle = hexToRGB(COLOR.BACKGROUND, 0.7);
  ctx.fillRect(3*PADDING/2 - 2, HEIGHT/2 - 50, WIDTH-(3*PADDING)+4, 65);
  ctx.fillStyle = COLOR.LIGHT_BLUE;
  ctx.fillText(text, WIDTH / 2, HEIGHT/2);
  ctx.closePath();
  animateLine(ctx, frame, 2 * FPS, startX, HEIGHT/2 + 7, width, 2);
  animateLine(ctx, frame, 2 * FPS, startX, HEIGHT/2 - 42, width, 2);

};