var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet =createSprite(50, 200, 50, 50);
  bullet.shapeColor = "black";

  thickness = Math.round(random(22,83));

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = rgb(80,80,80);

  speed = Math.round(random(223,321));
  
  weight = Math.round(random(30,52));
  bullet.velocityX = speed;

  

}

function draw() {
  background("yellow");

  damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));

  if (Touch(wall,bullet)) {
    bullet.velocityX = 0; 
    if(damage > 10){
    wall.shapeColor = "red";
    }
    else{
      wall.shapeColor = "green";
    }  
  }
  drawSprites();
}

function Touch(A,B){
  if(A.x-B.x<A.width/2+B.width/2){
    return true;
  }
  else{
    return false;
  }
}