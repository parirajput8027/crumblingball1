
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var line1 ,line2,line3;

var ground,ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//creating ground
	ground = createSprite(400,600,798,10)
	ground.shapeColor="green"
	
	//ball
	ball = createSprite(20,500,20,20)
	ball.shapeColor="red"
	//rightline
	line1 = createSprite(575,535,5,100)
	line1.shapeColor="black"
	//bottomline
	line2 = createSprite(625,585,100,5)
	line2.shapeColor="black"
    //leftline
	line3 = createSprite(675,535,5,100)
	line3.shapeColor="black"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  if(keyDown("space"))
  {
    ball.velocityX=3
	if(keyDown("up"))
	{
      ball.velocityY=-2
	}
	if(keyDown("down"))
	{
      ball.velocityY=2
	}
  }

  if(ball.isTouching(line2))
  {
    ball.lifetime=0
	text(200,200,"YOU WIN",0,0)
  }

  drawSprites();
 
}



