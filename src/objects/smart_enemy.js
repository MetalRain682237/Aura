import Enemy from "./enemy";
import { scaleVector, hitboxCollision } from "../util/game_util";
import { DIRECTION, SPRITE_DURATION, AI_LIMIT, AI_RESOLUTION } from "../game/constants";

export default class SmartEnemy extends Enemy{
  constructor(options){
    super(options);
    this.aiFrequency = SPRITE_DURATION ;
    this.aiLimit = AI_LIMIT;
    this.velocities = [
      scaleVector(DIRECTION.N, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.S, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.E, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.W, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.NE, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.NW, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.SE, this.moveSpeed * AI_RESOLUTION),
      scaleVector(DIRECTION.SW, this.moveSpeed * AI_RESOLUTION),
    ];
    this.previousAIDelta = -1;
  }
  moveToward(target, obstacles, delta){
    if(this.totalAIDelta === undefined){
      this.totalAIDelta = 0;
    }else{
      this.totalAIDelta += delta;
    }
    const step = Math.floor(this.totalAIDelta / this.aiFrequency);
    if (step > this.previousAIDelta) {
      this.previousAIDelta = step;
      const nextNode = this.getShortestPath(this, target, obstacles);
      if(nextNode){
        if(nextNode[0] < this.position[0]) this.velocity[0] = -1;
        else if(nextNode[0] > this.position[0]) this.velocity[0] = 1;
        else this.velocity[0] = 0;

        if(nextNode[1] < this.position[1]) this.velocity[1] = -1;
        else if(nextNode[1] > this.position[1]) this.velocity[1] = 1;
        else this.velocity[1] = 0;
      }else{
        super.moveToward(target, obstacles, delta);
      }
    }
  }
  getShortestPath(source, target, obstacles){
    const q = [source.position.slice()];
    const path = {};
    const visited = {};
    let nodesChecked = 0;
    while (q.length > 0 && nodesChecked < this.aiLimit) {
      const currentNode = q.shift();
      ++nodesChecked;
      visited[currentNode.join(",")] = true;
      if(hitboxCollision(target.getHitbox(), this.getHitboxAt(currentNode))){
        if(currentNode.join(",") === source.position.join(",")) return currentNode;
        let previousNode = currentNode;
        while(path[previousNode.join(",")].join(",") !== source.position.join(",")){
          previousNode = path[previousNode.join(",")];
        }
        return previousNode;
      }
      this.getNeighborsForPosition(currentNode).forEach(neighbor=>{
        const neighborHitbox = this.getHitboxAt(neighbor);
        if(visited[neighbor.join(",")] === undefined){
          let collided = false;
          let checked = 0;
          for(let i = 0; !collided && i < obstacles.length; ++i ){
            if(obstacles[i] !== this){
              checked++;
              collided = (hitboxCollision(neighborHitbox, obstacles[i].getHitbox()) && (obstacles[i].collidable));// || obstacles[i].deadly)); //avoids deadly objects
            }
          }
          if(!collided){
            visited[neighbor.join(",")] = currentNode.join(",");
            q.push(neighbor);
            path[neighbor.join(",")] = currentNode;
          }
        }
      });
    }
    return undefined;
  }
  getNeighborsForPosition(position){ //helper function for AI
    const neighbors = [];
    this.velocities.forEach(velocity=>{
      neighbors.push([position[0]+velocity[0], position[1] + velocity[1]]);
    });
    return neighbors;
  }
  
}