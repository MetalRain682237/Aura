import Player from "../objects/player";
import Enemy from "../objects/enemy";
import GameObject from "../objects/game_object";
import DeadlyObject from "../objects/deadly_object";
import { WIDTH, HEIGHT, DIRECTION, PADDING, MOVE_SPEED, IMAGES } from "./constants";

const centeredPlayer = ()=> new Player({
  position: [WIDTH / 2 - PADDING, HEIGHT / 2 - PADDING],
  velocity: DIRECTION.STATIONARY.slice(),
  facing: DIRECTION.S,
  width: 21,
  height: 34.5,
  grace: [[3, 3], [3, 3]],
  hp: 100,
  moveSpeed: 1.2 * MOVE_SPEED
});

const easyObstacleCourse = () => ([
  new GameObject({
    position: [570, 197],
    velocity: [0, 0],
    width: 3,
    height: 111
  }),
  new GameObject({
    position: [700, 197],
    velocity: [0, 0],
    width: 3,
    height: 111
  }),
  new GameObject({
    position: [424, 308],
    velocity: [0, 0],
    width: 149,
    height: 3
  }),
  new GameObject({
    position: [424, 458],
    velocity: [0, 0],
    width: 426,
    height: 3
  }),

  new GameObject({
    position: [700, 308],
    velocity: [0, 0],
    width: 148,
    height: 3
  }),

  new DeadlyObject({
    position: [849, 308],
    velocity: [0, 0],
    width: 3,
    height: 153,
    grace: [[3, 3], [0, 0]],
    collidable: false
  }),
]);

const miniRobot = (position) => new Enemy({
  position,
  velocity: [0, 0],
  width: 48,
  height: 48,
  grace: [[3, 3], [3, 0]],
  hp: 70,
  image: IMAGES.ENEMIES.ROBOT,
  moveSpeed: 0.7 * MOVE_SPEED
});


const mediumRobot = (position) => new Enemy({
  position,
  velocity: [0, 0],
  width: 64,
  height: 64,
  grace: [[5, 5], [5, 0]],
  hp: 150,
  image: IMAGES.ENEMIES.ROBOT,
  moveSpeed: 0.5 * MOVE_SPEED
});

const tinyRobot = (position) => new Enemy({
  position,
  velocity: [0, 0],
  width: 32,
  height: 32,
  grace: [[2, 2], [2, 0]],
  hp: 20,
  image: IMAGES.ENEMIES.ROBOT,
  moveSpeed: 1.2 * MOVE_SPEED
});

const LEVELS = () => [
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      miniRobot([100,100]),
      miniRobot([1100, 100]),
      miniRobot([100, 600]),
      miniRobot([1100, 600])
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      miniRobot([100, 100]),
      miniRobot([1100, 100]),
      miniRobot([100, 600]),
      miniRobot([1100, 600]), 
      miniRobot([400, 100]),
      miniRobot([800, 100]),
      miniRobot([400, 600]),
      miniRobot([800, 600])
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      mediumRobot([100, 100]),
      mediumRobot([1100, 100]),
      mediumRobot([100, 600]),
      mediumRobot([1100, 600]),
      miniRobot([400, 100]),
      miniRobot([800, 100]),
      miniRobot([400, 600]),
      miniRobot([800, 600])
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      tinyRobot([100, 100]),
      tinyRobot([200, 100]),
      tinyRobot([300, 100]),
      tinyRobot([400, 100]),
      tinyRobot([500, 100]),
      tinyRobot([600, 100]),
      tinyRobot([700, 100]),
      tinyRobot([800, 100]),
      tinyRobot([900, 100]),
      tinyRobot([1000, 100]),
      tinyRobot([1100, 100]),
      tinyRobot([100, 600]),
      tinyRobot([200, 600]),
      tinyRobot([300, 600]),
      tinyRobot([400, 600]),
      tinyRobot([500, 600]),
      tinyRobot([600, 600]),
      tinyRobot([700, 600]),
      tinyRobot([800, 600]),
      tinyRobot([900, 600]),
      tinyRobot([1000, 600]),
      tinyRobot([1100, 600]),
      tinyRobot([100, 200]),
      tinyRobot([100, 300]),
      tinyRobot([100, 400]),
      tinyRobot([100, 500]),
      tinyRobot([1100, 200]),
      tinyRobot([1100, 300]),
      tinyRobot([1100, 400]),
      tinyRobot([1100, 500]),
    ]
  }


];

export const ALL_LEVELS = LEVELS();
export const NUM_LEVELS = ALL_LEVELS.length;
export const getLevel = (i) => LEVELS()[i];