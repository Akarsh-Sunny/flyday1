var boy,ball;
var gameState;



function setup() {
  createCanvas(1200,800);

 boy= createSprite(600,450);



}


function draw() {
  background(255,0,255); 


  if(gameState==="play"){





  
if(keyDown==="left"){
  boy.x=boy.x-20
}
if(keyDown==="right"){
  boy.x=boy.x+20
}
if(keyDown==="up"){
  boy.y=boy.y+20
}

  }
if(gameState==="end"){





}
  drawSprites();
}
function spawnball(){
if(World.frameCount%30===0){
  ball=createSprite(0,0);
var rand1=Math.round(random(10,400));
var rand2=Math.round(random(420,800));
var rand3=Math.round(random(820,1180));







}
}