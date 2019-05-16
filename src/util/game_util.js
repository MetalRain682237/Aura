import {IMAGES, PADDING, WIDTH, HEIGHT} from "../game/constants";

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
    });

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
    if (!object1.collidable) return false;
    if (!object2.collidable) return false;
    const [startX, startY] = object1.position;
    const [otherStartX, otherStartY] = object2.position;
    const [endX, endY] = [startX + object1.width, startY + object1.height];
    const [otherEndX, otherEndY] = [otherStartX + object2.width, otherStartY + object2.height];

    return (startX <= otherEndX &&
      endX >= otherStartX &&
      startY <= otherEndY &&
      endY >= otherStartY);
  };

  export const checkBounds = (object)=>{
    return !(object.position[0] < PADDING  || object.position[0] + object.width > WIDTH - PADDING ||
      object.position[1] < PADDING || object.position[1] + object.height > HEIGHT - PADDING)
  };