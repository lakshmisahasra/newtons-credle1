
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  bob1=new bob(400,300,40);
	  bob2=new bob(440,300,40);
	  bob3=new bob(480,300,40);
	  bob4=new bob(360,300,40);
	  bob5=new bob(320,300,40);
	  roof1=new roof(400,100,200,20);
	  rope1=new chain(bob1.body,roof1.body,0,100);
	  rope2=new chain(bob2.body,roof1.body,40,100);
	  rope3=new chain(bob3.body,roof1.body,80,100);
	  rope4=new chain(bob4.body,roof1.body,-40,100);
	  rope5=new chain(bob5.body,roof1.body,-80,100);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  //Engine.update(engine);
 bob1.display();
 bob2.display(); 
 bob3.display(); 
 bob4.display(); 
 bob5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:15,y:15})
		console.log("hi");
	}
}


