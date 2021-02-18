//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,ground
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
 ground = Bodies.rectangle(200,370,400,50,options);
  World.add(world,ground);

  var options = {
    restitution:1.50
  }
ball =Bodies.circle(200,200,40,options);
World.add (world,ball);

}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)

  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40)
  
}