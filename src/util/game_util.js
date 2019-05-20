import {IMAGES, PADDING, WIDTH, HEIGHT, KEY, DIRECTION} from "../game/constants";

//preload images for drawing, callback when completed
export const loadImages = (callback)=>{
    let count = 0; //how many images have loaded?
    let total = 0;
    {
      total += 1;
      let img = new Image();
      img.onload = loaded;
      img.src = `images/background-pattern.png`;
      IMAGES.BACKGROUND = img;
    }

    const directions = ["up", "down", "left", "right"];
    directions.forEach(direction=>{
      for(let i = 1; i <= 3; ++i ){
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `images/sprite/${direction}_${i}.png`;
        IMAGES.PLAYER[direction].push(img);
      }

      for (let i = 1; i <= 4; ++i) {
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `images/enemies/robot_${direction}_${i}.png`;
        IMAGES.ENEMIES.ROBOT[direction].push(img);
      }

    });
  for (let i = 0; i < 12; ++i) {
    total += 1;
    let img = new Image();
    img.onload = loaded;
    img.src = `images/explosion/explosion_${i}.png`;
    IMAGES.EXPLOSION.push(img);
  }

    //gets called when an image gets loaded
    function loaded() {
      count++;
      if (count >= total) {
        //execute callback when all images have successfully loaded
        callback();
      }
    }
  };

  export const scaleVector = (vector, delta)=>{
    return [vector[0] * delta, vector[1] * delta];
  };

  export const boxCollision = (object1, object2)=>{
    const [startX, startY] = object1.position;
    const [otherStartX, otherStartY] = object2.position;
    const [endX, endY] = [startX + object1.width, startY + object1.height];
    const [otherEndX, otherEndY] = [otherStartX + object2.width, otherStartY + object2.height];

    return (startX + object1.grace[0][0] <= otherEndX-object2.grace[0][1] &&
      endX - object1.grace[0][1] >= otherStartX + object2.grace[0][0] &&
      startY + object1.grace[1][0] <= otherEndY - object2.grace[1][1] &&
      endY - object1.grace[1][1] >= otherStartY + object2.grace[1][0]);
  };

  export const checkBounds = (object)=>{
    return !(object.position[0] + object.grace[0][0] < PADDING  || object.position[0] + object.width - object.grace[0][1] > WIDTH - PADDING ||
      object.position[1] + object.grace[1][0] < PADDING || object.position[1] + object.height - object.grace[1][1] > HEIGHT - PADDING)
  };

//https://stackoverflow.com/a/19303725
export const random = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const directionForKeys = (keydown) =>{
  const velocity = [0,0];
  if(keydown[KEY.UP]){
    velocity[1]-=1;
  }
  if(keydown[KEY.DOWN]){
    velocity[1]+=1;
  }
  if(keydown[KEY.LEFT]){
    velocity[0]-=1;
  }
  if(keydown[KEY.RIGHT]){
    velocity[0]+=1;
  }
  return velocity;
};
export const bulletVelocityForKeys = (keydown) => {
  const velocity = [0, 0];
  if (keydown[KEY.W]) {
    velocity[1] -= 1;
  }
  if (keydown[KEY.S]) {
    velocity[1] += 1;
  }
  if (keydown[KEY.A]) {
    velocity[0] -= 1;
  }
  if (keydown[KEY.D]) {
    velocity[0] += 1;
  }
  return velocity;
};

export const compare = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

export const resetKeys = (keydown)=>{
  keydown[KEY.UP] = false;
  keydown[KEY.LEFT] = false;
  keydown[KEY.RIGHT] = false;
  keydown[KEY.DOWN] = false;
  keydown[KEY.W] = false;
  keydown[KEY.A] = false;
  keydown[KEY.S] = false;
  keydown[KEY.D] = false;
};