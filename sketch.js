var car, carSpeed, carWeight, deformation;
var wall;

function setup() {
  createCanvas(1000,400);

  wall = createSprite(900,200,60,height/2);
  wall.shapeColor = color(90,90,90);

  carSpeed = Math.round(random(55,90));
  carWeight = Math.round(random(400,1500));

  car = createSprite(50,200,50,50);
  car.velocityX = carSpeed;
}

function draw() {
  background("black");
  

  if(car.x - wall.x < car.width/2 + wall.width/2 
    && wall.x - car.x < car.width/2 + wall.width/2 
    && car.y - wall.y < car.height/2 + wall.height/2 
    && wall.y - car.y < car.height/2 + wall.height/2){
      
    car.velocityX = 0;
    deformation = 0.5*carWeight*carSpeed*carSpeed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}