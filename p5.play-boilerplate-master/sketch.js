 const Engine= Matter.Engine
 const World= Matter.World
 const Bodies=Matter.Bodies

var engine, world;
var fish
var fishImage
var background1
var background1Img
var sharks,shark1,shark2,shark3,shark4,shark5,shark6,shark7
var sharkImg
var eels
var engine
var world
var bodies
//var wastes
//var wasteImg
function preload() {
  fishImage=loadAnimation("fish1.png","fish2.png","fish3.png");
  background1Img=loadImage("background.png");
  //wastesImg=loadImage("plastic-bag-cartoon-png.png");
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
  engine = Engine.create();
  world = engine.world;



  fish=createSprite(windowWidth/2, windowHeight-100, 50, 50);
  fish.addAnimation("fishImage",fishImage);
 // wastes=createSprite(Math.round(random(10,390)),Math.round(random(10,100)),30,30);
 // wastes.addImage("wastesImg",wastesImg);
  background1=createSprite(100,100);
  background1.addImage("background1Img",background1Img);
  fish.velocityY=-2;
  fish.scale=0.3;
  shark1= new Shark (windowHeight-100,30,20);
  shark2= new Shark (windowHeight-200,40,20);
  shark3= new Shark (windowHeight/2,60,20);
  shark4= new Shark (windowHeight/2-200,50,20);
  shark5= new Shark (windowHeight/2-100,70,20);
  shark6= new Shark (windowHeight/2+70,80,20);
  shark7= new Shark (windowHeight/2-50,90,20);
  
  

}


function draw() {
  background(0,0,200);
  Engine.update(engine);

  if(keyDown(LEFT_ARROW)){
    fish.x=fish.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    fish.x=fish.x+10;
  }
  shark1.body.position.x=shark1.body.position.x-3

 shark1.display();
 shark2.display();
 shark3.display();
 shark4.display();
 shark5.display();
 shark6.display();
 shark7.display();
  drawSprites();
}

// look for pictures of waste done 
// make waste funtion createSprite and add picture
//create sharks at different y postions and give velocity

function waste(){

}