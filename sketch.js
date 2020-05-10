var fixedRect, movingRect;
var ball,stone;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball = createSprite(600,150,30,30);
  ball.shapeColor="chartreuse";
  ball.debug=true;

  stone=createSprite(300,250,50,65);
  stone.shapeColor="cyan";
  stone.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  ball.x=mouseX;
  ball.y=mouseY;
 
  bounceOff(movingRect,fixedRect);

  if(isTouching(ball,stone)){
  ball.shapeColor="red";
  ball.velocityY=-5;
  }
  else{
  ball.shapeColor="chartreuse";
    ball.velocityY=0;
  }
 
  drawSprites();
}

