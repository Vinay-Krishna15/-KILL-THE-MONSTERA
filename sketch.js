const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18;
var ground,ball,Background,slingshot,superman;

function preload(){
  Background=loadImage("Background.png")
}
function setup(){
    var canvas = createCanvas(1800,600);
    engine = Engine.create();
    world=engine.world;
    ground= new Ground(350,450,1200,20);
    //slingshot= new Slingshot(superman,(60,50));
    //superman= new Superman()
 
    box1 = new Box(750,100,50,50);
    box2=new Box(750,100,50,50);
    box3=new Box(750,100,50,50);
    box4 = new Box(750,100,50,50);
    box5=new Box(750,100,50,50);
    box6=new Box(750,100,50,50);
    box7 = new Box(830,100,50,50);
    box8=new Box(830,100,50,50);
    box9=new Box(830,100,50,50);
    box10 = new Box(830,100,50,50);
    box11=new Box(830,100,50,50);
    box12=new Box(910,100,50,50);
    box13= new Box(910,100,50,50);
    box14=new Box(910,100,50,50);
    box15=new Box(910,100,50,50);
    box16= new Box(910,100,50,50);
    
}

function draw(){
  background(Background);
  Engine.update(engine);
  //ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground.display();
}
