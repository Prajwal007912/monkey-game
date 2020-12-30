
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0
var background1;

function preload(){

  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  background1Image = loadImage("background.jpg");
 
}



function setup() {
  
  background1=createSprite(80,150,20,20);
  background1.addImage(background1Image);
  background1.velosityX=-4; 
  background1.x=background1.width/2;
  
  //creating the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;
  
  //creating the ground
  ground=createSprite(400,350,900,10);
  ground.velosityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
 
}


function draw() {
background(255);
  
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);

   drawSprites();
}

function food(){
  
  if(World.frameCount%80==0){
    var mp40 =Math.round(random(1,1));
    
    banana=createSprite(160,200,2,2);
    banana.scale=0.1
    if(banana===2){
      banana.y=0;
      banana.velosityY=120;
      
      
      banana.setLifetime=120;
    }
  }
  
  
  
}


