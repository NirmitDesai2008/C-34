const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var trainSound, crashSound;
var flag = 0;

function preload(){
  backgroundImage = loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,20);

  coach1 = new Coach(50,340,100,80);
  coach2 = new Coach(160,340,100,80);
  coach3 = new Coach(270,340,100,80);
  coach4 = new Coach(380,340,100,80);
  coach5 = new Coach(490,340,100,80);
  coach6 = new Coach(600,340,100,80);

  rock = new Rock(1020,340,220,90);

  chain1 = new Chain(coach1.body,coach2.body);
  chain2 = new Chain(coach2.body,coach3.body);
  chain3 = new Chain(coach3.body,coach4.body);
  chain4 = new Chain(coach4.body,coach5.body);
  chain5 = new Chain(coach5.body,coach6.body);
}

function draw(){
  background(backgroundImage);  
  Engine.update(engine);

  coach1.show();
  coach2.show();
  coach3.show();
  coach4.show();
  coach5.show();
  coach6.show();

  rock.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

  var collision = Matter.SAT.collides(coach6.body, rock.body);

  if (collision.collided){
    flag = 1;
  }

  if (flag === 1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(coach6.body, {x: coach6.body.position.x, y: coach6.body.position.y}, {x: 2, y: 0});
    trainSound.play();
  }
}