const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var bgSound

var gameState = "Play";


function preload(){
   bgSound = loadSound("BgSound.mp3")

}

function setup() {
  createCanvas(690, 420);
  engine = Engine.create();
  world = engine.world;
  
  
  
 

  ground = new Box(300, 390, 800, 20);
  Matter.Body.setStatic(ground.body,true);
  
  bgSound.play()

  box1 = new Box(200, 100, 50, 50);
  box2 = new Box(200, 100, 50, 50);
  box3 = new Box(200, 100, 50, 50);
  box4 = new Box(300, 100, 50, 50);
  box5 = new Box(300, 100, 50, 50);
  box6 = new Box(300, 100, 50, 50);
  box7 = new Box(300, 100, 50, 50);
  box8 = new Box(300, 100, 50, 50);
  box9 = new Box(300, 100, 50, 50);
  box10 = new Box(400, 100, 50, 50);
  box11 = new Box(400, 100, 50, 50);
  box12 = new Box(400, 100, 50, 50);
  box13 = new Box(400, 100, 50, 50);
  box14 = new Box(400, 100, 50, 50);
  ball = new Ball(100, 200, 80, 80);
  rope = new Rope(ball.body, { x: 100, y: 50 });

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  
  rope.display();
  ball.display();

  fill("red")
  text("Drag the ball with mouse",20,20)
  text.size = 0.5
  
  text("Release the mouse to make the ball fall",20,40)
  
  
  text("Since, I don't have enough time to submit project so I added this random song",250,10)
  text.size = 0.5

}


function mouseDragged() {
 
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}


