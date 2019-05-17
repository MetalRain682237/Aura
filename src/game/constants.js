export const WIDTH = 1280;
export const HEIGHT = 720;
export const PADDING = 10;
export const BACKGROUND_TILE_SIZE = 400;
export const MOSAIC_SIZE = 50;
export const CANVAS = {
  position: [PADDING,PADDING],
  width: WIDTH - 2*PADDING,
  height: HEIGHT - 2*PADDING,
  center: [WIDTH/2, HEIGHT/2],
  collidable: true
};

export const COLOR = {
  BACKGROUND: "#000000",
  DARK_BLUE: "#1c92d2",
  LIGHT_BLUE: "#54EFEA",
  RED: "#FF1234",
  WHITE: "#FFFFFF"
};
export const FONT = "Orbitron";

export const STATE = {
  LOADING: 0,
  TITLE: 1,
  PLAYING: 2,
  PAUSED: 3,
  GAME_OVER: 4
};

export const FPS = 60;
export const SPRITE_DURATION = FPS/4;
export const MOVE_SPEED = 1.5;

export const DIRECTION = {
  N: [0, -1],
  NE: [1, -1],
  E: [1, 0],
  SE: [1, 1],
  S: [0, 1],
  SW: [-1, 1],
  W: [-1, 0],
  NW: [-1, -1],
  STATIONARY: [0,0]
};

export const KEY = {
  ENTER: 13,
  P: 80,
  UP: 38,
  W: 87,
  LEFT: 37,
  A: 65,
  DOWN: 40,
  S: 83,
  RIGHT: 39,
  D: 68,
  SPACE: 32,
  Q: 81
};

export const IMAGES = {
  BACKGROUND: null,
  PLAYER:{
    up: [],
    down: [],
    left: [],
    right: []
  }
};