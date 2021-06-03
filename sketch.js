const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var box1;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
    var options={
        isStatic:true
    }

    object = Bodies.rectangle(200,390,400, 20,options);
    World.add(world,object);

    console.log(object);

    //object_name= new class_name();
    box1=new Box(100,200,40,70);
    box2= new Box(200,100,30,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,400,20);

   // object_name.function_name();
   box1.display();
box2.display();
 
}