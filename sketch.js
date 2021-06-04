
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftborder;
var rightborder;
var topborder;
var wall1;
var wall2;

function setup() {
	createCanvas(800, 350);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		density: 4,
		restitution: 0.3,
		friction: 0
	}

	ground_options = {
        isStatic: true,
    }

	ball=Bodies.circle(200, 40, 10, ball_options);
	World.add(world, ball);

	ground=Bodies.rectangle(400, 345, 800, 10, ground_options);
	World.add(world, ground);

	topborder=Bodies.rectangle(400, 5, 800, 10, ground_options);
	World.add(world, topborder);

	leftborder=Bodies.rectangle(5, 175, 10, 400, ground_options);
	World.add(world, leftborder);

	rightborder=Bodies.rectangle(795, 175, 10, 400, ground_options);
	World.add(world, rightborder);

	wall1=Bodies.rectangle(510, 300, 10, 80, ground_options);
	World.add(world, wall1);

	wall2=Bodies.rectangle(650, 300, 10, 80, ground_options);
	World.add(world, wall2);

	Engine.run(engine);
   
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("black"); 

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 15);

  rect(ground.position.x, ground.position.y, 800, 10);
  rect(topborder.position.x, topborder.position.y, 800, 10);
  rect(rightborder.position.x, rightborder.position.y, 10, 400);
  rect(leftborder.position.x, leftborder.position.y, 10, 400);
  rect(wall1.position.x, wall1.position.y, 10, 80);
  rect(wall2.position.x, wall2.position.y, 10, 80);
}

function keyPressed() {
	if (keyCode==RIGHT_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:0.0001});
	}
}