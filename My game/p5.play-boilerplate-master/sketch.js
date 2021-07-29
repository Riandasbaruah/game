var laser1 , laser2 , laser3 , laser4 , laser5 , laser6 , laser7;

var wall1 , wall2;

var player;

var gameState = "level1"



function setup() {
  Canvas = createCanvas(1240,600);
  


wall1 = createSprite(620,20,1240,10)
wall1.shapeColor= "black"

wall2 = createSprite(620,580,1240,10)
wall2.shapeColor= "black"

player = createSprite(30,250,20,20)
player.shapeColor= "orange"



}

function draw() {
  background(255,255,255);
  //level1() 

  player.collide(wall1)
player.collide(wall2)
if(gameState==="level1"){ 

  level1()

  if(keyDown(UP_ARROW)){
    player.y = player.y-5
}

 if(keyDown(DOWN_ARROW)){
   player.y = player.y+5
 }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }
  }


 
  drawSprites();

}