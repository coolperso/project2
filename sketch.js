var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,orangeLeafImg
var apple,leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  orangeLeafImg=loadImage("orangeLeaf.png")
}




function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);



rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}
var select_sprites=Math.round(random(1,2));

if(frameCount%80==0) {
  if(select_sprites==1){
    createApples()
  }
  else{
    createLeaves()
  }
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX

  drawSprites();
}



function createApples() {
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.velocityY=3
  
}

function createLeaves() {
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage(orangeLeafImg)
  leaf.velocityY=3
}
