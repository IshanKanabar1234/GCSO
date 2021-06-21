var car,wall,speed,weight;

function setup(){
  car=createSprite(50,200,10,10);
  wall=createSprite(350,200,10,100);
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw(){
  createCanvas(400,400);
  background("white");
 if(car.isTouching(wall)){
var deformation=0.5*weight*speed*speed/22500;

car.velocityX=0;

if(deformation<100){
  car.shapeColor="green";
}

if(deformation>100 && deformation<180){
  car.shapeColor="yellow";
}

if(deformation>180){
  car.shapeColor="red";
}

}
drawSprites();
}