const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
   for(var j = 40; j <= width; j = j+50){ 
    plinkos.push(new Plinko(j,50,10));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,150,10));
  }
  for(var j = 40; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,250,10));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,350,10));
  }
  for(var j = 40; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,450,10));
  }
}
 
function draw() {
  background("black");

  Engine.update(engine);
  ground.display();

  for (var j = 0; j < plinkos.length; j++) {
     plinkos[j].display();  
  }

  if(frameCount % 60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
  }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}