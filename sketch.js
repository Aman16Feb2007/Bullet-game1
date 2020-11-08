var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet =createSprite(50, 200, 50, 50);
  bullet.shapeColor = "black";

  wall = createSprite(1200,200,10,200);
  wall.shapeColor = rgb(80,80,80);    

  speed = Math.round(random(55,90));
  
  weight = Math.round(random(400,1500));
  bullet.velocityX = speed;
}

function draw() {
  background("yellow");

  deformation = Math.round(0.5*weight*speed*speed/22500);

  if (wall.x-bullet.x<wall.width/2+bullet.width/2) {
    bullet.velocityX = 0; 
    if(deformation > 180){
bullet.shapeColor = "red";
    }
    
    if (deformation < 100){
      bullet.shapeColor = "green";
    }

    if (deformation >= 100 && deformation <= 180){
      bullet.shapeColor = "purple";
    }

  
  
  }

  drawSprites();

  textSize(20);
  text("speed "+speed,1000,20);
  text("weight "+weight,1000,50)
  text("deformation "+deformation,1000,80);
}