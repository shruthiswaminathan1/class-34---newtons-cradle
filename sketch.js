
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(300, 350, 50)
	ball2 = new Ball(350, 350, 50)
	ball3 = new Ball(400, 350, 50)
	ball4 = new Ball(450, 350, 50)
	ball5 = new Ball(500, 350, 50)
	ground1 = new Ground(width/2, 20, 800, 30)
	sling1= new String(ball1.body,ground1.body,-50*2,0);
	sling2= new String(ball2.body,ground1.body,-25*2,0);
	sling3= new String(ball3.body,ground1.body,-0*2,0);
	sling4= new String(ball4.body,ground1.body,25*2,0);
	sling5= new String(ball5.body,ground1.body,50*2,0);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("#1CA2A4")
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ground1.display();

	drawSprites();

}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 
} 


