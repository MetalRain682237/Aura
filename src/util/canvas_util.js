import { WIDTH, HEIGHT, COLOR, BACKGROUND_TILE_SIZE, IMAGES, PADDING } from "../game/constants";

export const clear = (ctx)=>{
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = COLOR.BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
};
export const animateLine = (ctx, frame, duration, x, y, width, lineWidth = 1)=>{
  ctx.beginPath();
  const percent = (frame % duration) / duration;
  const startOffset = (percent < 0.5) ? 0 : width * 2 * (percent - 0.5);
  const endOffset = (percent > 0.5) ? 0 : width - width * 2 * percent;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x + startOffset, y);
  ctx.lineTo(x + width - endOffset, y);
  ctx.stroke();
  ctx.closePath();
};

export const drawBackground = (ctx) => {
  for(let x = 0; x*BACKGROUND_TILE_SIZE <= WIDTH; x++){
    for(let y = 0; y*BACKGROUND_TILE_SIZE <= HEIGHT; y++){
      ctx.drawImage(IMAGES.BACKGROUND, x*BACKGROUND_TILE_SIZE, y*BACKGROUND_TILE_SIZE, BACKGROUND_TILE_SIZE, BACKGROUND_TILE_SIZE);
    }
  }
  clearPadding(ctx);
};

const clearPadding = (ctx)=>{
  ctx.clearRect(0,0,PADDING,HEIGHT);
  ctx.clearRect(0,0,WIDTH,PADDING);
  ctx.clearRect(WIDTH-PADDING,0,PADDING,HEIGHT);
  ctx.clearRect(0,HEIGHT-PADDING,WIDTH,PADDING);
  
  ctx.fillStyle = COLOR.BACKGROUND;
  ctx.fillRect(0,0,PADDING,HEIGHT);
  ctx.fillRect(0,0,WIDTH,PADDING);
  ctx.fillRect(WIDTH-PADDING,0,PADDING,HEIGHT);
  ctx.fillRect(0,HEIGHT-PADDING,WIDTH,PADDING);
};

//https://stackoverflow.com/a/28056903
export const hexToRGB = (hex, alpha)=>{
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};