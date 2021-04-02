var ground,dustbin1,paper,invisibleWall,invisibleWall1 ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 dustbin1 = new Dustbin(690,420,160,60);
	 ground = new Ground(400,580,800,20);
	 paper = new Paper(100,575,35);
	 
	 keyPressed();
	 var options ={
		 isStatic:true
	 }
	 invisibleWall = Bodies.rectangle(690,490,160,10,options);
	 World.add(world,invisibleWall);
     
	 invisibleWall1 = Bodies.rectangle(780,370,10,100,options);
	 World.add(world,invisibleWall1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);	
  background("yellow");
  Engine.update(engine);

 
  paper.display();
  dustbin1.display();
  ground.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-190})
	}
	
}

