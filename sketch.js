
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground,tree,treeImage;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
treeImage=loadImage("tree.png")	;
boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	mango1=new Mango(100,460,23);
	mango2=new Mango(600,290,34);
	mango3=new Mango(855,325,35);
    mango4=new Mango(670,260,35);
	mango5=new Mango(710,320,36);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



