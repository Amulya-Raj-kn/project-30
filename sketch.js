const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  // create two stands
  ground = new Ground();
  
 
  //level one 7 blocks you have to create

  
  //level two create 5 blocks 


  //level three create 3 blocks


  //top create a single block
  

  //set 2 for second stand
  //level one create 5 blocks
 
  //level two create 3 blocks
 
  //top create a block
  

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  //display ground and stands
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  //display 7 blocks
 
  fill("pink");
  //display 5 blocks

  fill("turquoise");
  //display 3 blocks 

  fill("grey");
  //display a block

  fill("skyblue");
 //display 5 blocks

  fill("turquoise");
//display 3 blocks

  fill("pink")
// display a block
 
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}