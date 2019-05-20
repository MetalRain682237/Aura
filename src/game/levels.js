import Player from "../objects/player";
import Enemy from "../objects/enemy";
import GameObject from "../objects/game_object";
import DeadlyObject from "../objects/deadly_object";
import { WIDTH, HEIGHT, DIRECTION, PADDING, MOVE_SPEED, IMAGES, HORIZONTAL, VERTICAL } from "./constants";
import AlternatingLaserGate from "../objects/alternating_laser_gate";
import DumbEnemy from "../objects/dumb_enemy";
import SmartEnemy from "../objects/smart_enemy";

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

const horizontalWall = ({ position, width }) => new GameObject({
  position,
  width,
  height: 3,
  velocity: [0, 0]
});
const verticalWall = ({position, height})=>new GameObject({
    position,
    height,
    velocity: [0, 0],
    width: 3
  });
const horizontalLaser = ({ position, width }) => new DeadlyObject({
  position,
  width,
  velocity: [0, 0],
  height: 3,
  grace: [[0, 0], [3, 3]],
  collidable: false
});
const verticalLaser = ({position, height})=>new DeadlyObject({
  position,
  height,
  velocity: [0, 0],
  width: 3,
  grace: [[3, 3], [0, 0]],
  collidable: false
});
const horizontalAlternatingLaser = ({ position, width, parity = 0 }) => new AlternatingLaserGate({
  width,
  position,
  parity,
  height: 3,
  orientation: HORIZONTAL,
  velocity: [0, 0],
  grace: [[0, 0], [3, 3]],
  collidable: false
});
const verticalAlternatingLaser = ({ position, height, parity = 0 }) => new AlternatingLaserGate({
  position,
  parity,
  height,
  width: 3,
  orientation: VERTICAL,
  velocity: [0, 0],
  grace: [[3, 3], [0, 0]],
  collidable: false
});

const easyObstacleCourse = () => ([
  verticalWall({
    position: [570, 197],
    height: 111
  }),
  verticalWall({
    position: [700, 197],
    height: 111
  }),
  horizontalWall({
    position: [424, 308],
    width: 149
  }),
  horizontalWall({
    position: [424, 458],
    width: 426
  }),

  horizontalWall({
    position: [700, 308],
    width: 148
  })
]);

const easyLaserGateMaze = ()=>([
  verticalWall({
    position: [570, 197],
    height: 111
  }),
  verticalWall({
    position: [700, 197],
    height: 111
  }),
  horizontalWall({
    position: [424, 308],
    width: 149
  }),
  horizontalWall({
    position: [424, 458],
    width: 426
  }),

  horizontalWall({
    position: [700, 308],
    width: 148
  }),
  verticalAlternatingLaser({
    position: [424, 308],
    height: 153
  }),
  verticalAlternatingLaser({
    position: [849, 308],
    height: 153,
    parity: 1
  }),
  horizontalLaser({
    position: [570, 197],
    width: 130
  })
 
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

const slime = (position) => new DumbEnemy({
  position,
  velocity: [0, 0],
  width: 36,
  height: 42,
  grace: [[5, 5], [6, 2]],
  hp: 20,
  image: IMAGES.ENEMIES.SLIME,
  moveSpeed: 0.6 * MOVE_SPEED
});
const megaSlime = (position) => new DumbEnemy({
  position,
  velocity: [0, 0],
  width: 72,
  height: 84,
  grace: [[10, 10], [3, 1]],
  hp: 200,
  image: IMAGES.ENEMIES.SLIME,
  moveSpeed: 0.3 * MOVE_SPEED
});

const knight = (position) => new SmartEnemy({
  position,
  velocity: [0, 0],
  width: 30,
  height: 42,
  grace: [[6, 6], [3, 2]],
  hp: 80,
  image: IMAGES.ENEMIES.KNIGHT,
  moveSpeed: 1.1 * MOVE_SPEED
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
      knight([100, 100]),
      knight([1100, 100]),
      knight([100, 600]),
      knight([1100, 600])
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyLaserGateMaze(),
    enemies: [
      mediumRobot([100, 100]),
      mediumRobot([1100, 100]),
      mediumRobot([100, 600]),
      mediumRobot([1100, 600]),
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      slime([100, 100]),
      slime([500, 100]),
      slime([900, 100]),
      slime([300, 600]),
      slime([700, 600]),
      megaSlime([300, 550]),
      megaSlime([900, 150]),
      slime([100, 200]),
      slime([100, 400]),
      slime([1100, 200]),
      slime([1100, 400]),
    ]
  },
  {
    player: centeredPlayer(),
    obstacles: easyLaserGateMaze(),
    enemies: [

      tinyRobot([200, 100]),
      tinyRobot([400, 100]),
      tinyRobot([600, 100]),
      tinyRobot([800, 100]),
      tinyRobot([1000, 100]),
      tinyRobot([200, 600]),
      tinyRobot([400, 600]),
      tinyRobot([600, 600]),
      tinyRobot([800, 600]),
      tinyRobot([1000, 600]),
      tinyRobot([200, 200]),
      tinyRobot([200, 400]),
      tinyRobot([1000, 200]),
      tinyRobot([1000, 400]),
    ]
  },
  
  {
    player: centeredPlayer(),
    obstacles: easyObstacleCourse(),
    enemies: [
      slime([100, 100]),
      slime([300, 100]),
      slime([500, 100]),
      slime([700, 100]),
      slime([900, 100]),
      slime([100, 600]),
      slime([300, 600]),
      slime([500, 600]),
      slime([700, 600]),
      slime([900, 600]),
      megaSlime([300, 550]),
      megaSlime([900, 550]),
      megaSlime([300, 150]),
      megaSlime([900, 150]),
      slime([100, 200]),
      slime([100, 300]),
      slime([100, 400]),
      slime([100, 500]),
      slime([1100, 200]),
      slime([1100, 300]),
      slime([1100, 400]),
      slime([1100, 500]),
      knight([100, 100]),
      knight([1100, 100]),
      knight([100, 600]),
      knight([1100, 600])
    ]
  }
];

export const ALL_LEVELS = LEVELS();
export const NUM_LEVELS = ALL_LEVELS.length;
export const getLevel = (i) => LEVELS()[i];