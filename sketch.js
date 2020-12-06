var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(250, 200, 15, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(550, 200, 15, 50);
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log (movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 ){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }  
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } 


  drawSprites();
}