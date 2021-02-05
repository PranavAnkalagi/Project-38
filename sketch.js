var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  shipImg2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  background("blue");
  
// Moving background
sea=createSprite(400,200);
sea.addImage(seaImg);

sea.scale=0.3;

//creating boy running
ship = createSprite(130,200,displayWidth,displayHeight);
ship.addAnimation("movingShip",shipImg1);
ship.scale =0.25;
  
}

function draw() {
  background(0);
sea.IsStatic=true;

  if (keyDown(RIGHT_ARROW)) {
  ship.x=ship.x+5;
	camera.position.x=ship.x;
	camera.position.y=ship.y;

  }
    
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  
  if(keyDown("space")) {
    ship.addAnimation("movingShip",shipImg2);
  }
  
  drawSprites();
}