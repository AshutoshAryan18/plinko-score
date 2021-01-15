const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=200;

var ground;

var gameState="play";
var particle
var score=0

var count=0







function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

 // mousePressed()
  
for (var k = 0;k<=width;k=k+80){
    divisions.push(new division(k,450,10,150));
}

for(var j =20; j <=width; j=j+50)
{
    plinkos.push(new plinko(j,55));
}
  for(var j =27; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,120));
}
for(var j =25; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,190));
}
for(var j =21; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,260));
}
for(var j =30; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,330));
}



  ground1=new Ground(500,500);




  Engine.run(engine);
}

function draw() {
  background("black");  

  text ("score-"+score,700,40)
  text ("500",30,400)
  text ("500",110,400)
  text ("500",190,400)
  text ("500",270,400)
  text ("200",350,400)
  text ("200",430,400)
  text ("200",510,400)
  text ("200",590,400)
  text ("600",670,400)
  text ("600",750,400)
  text ("600",830,400)
  text ("600",910,400)


  /*display
  
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }*/
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  //display

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  //display
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
//

  if(particle!=null){
    particle.display();
  
    if(particle.body.position.y>400){
  
      if(particle.body.position.x<300){
  
        score=score+500;
        particle=null;
        if(count>=5)  gameState="End"
  
      }
 else if(particle.body.position.x>301&&particle.body.position.x<600){
  
        score=score+200;
        particle=null;
        if(count>=5)  gameState="End"
  
      }
      else if(particle.body.position.x>601&&particle.body.position.x<900){
  
        score=score+600;
        particle=null;
        if(count>=5)  gameState="End"
  
      }
    }
  }
  ground1.display();

  if(gameState==="End"){
    text("GAMEOVER",500,230)
  }


}

function mousePressed(){
  if(gameState!=="End"){
    count++
    particle=new Particle(mouseX,10,10,10)

  }
}