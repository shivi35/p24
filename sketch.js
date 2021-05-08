
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(600,680,1200,20);
   box1=new Box(900,600,20,70);
   box2 = new Box(1100,600,20,70);
   box3 = new Box(1000,650,250,20);
   var options={
	   restitution:0.3,
	   friction:0.5,
	   density:1.2,
	   isStatic:false
   }
   ball = Bodies.circle(200,650,20,options);
   World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box3.display();
  
  box1.display();
  box2.display();
  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce (ball,ball.position,{x:75,y:-75})
			
	}
}



