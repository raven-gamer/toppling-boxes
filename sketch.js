const Bodies=Matter.Bodies 
const World=Matter.World
const Engine=Matter.Engine

var engine,world
var ground1,box1,box2


function setup() {
  createCanvas(400,400);
                                                 
engine=Engine.create()
world=engine.world     

box1=new Box(200,300,50,50)
box2=new Box(240,200,50,100)
ground1=new Ground(200,400,400,20)

}  

function draw() {
  background(0,0,0);  
  drawSprites();

Engine.update(engine)

box1.display()
box2.display()
ground1.display()


}