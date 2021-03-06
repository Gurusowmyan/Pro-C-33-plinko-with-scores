const Engine = Matter.Engine;
const World=Matter.World; 
const Bodies = Matter.Bodies;
const Event = Matter.Event;
 
var engine,world,bodies,events;
var divisions=[];
var particles = [] ;
var particle;
var plinkos = [];
var gameState ="play";
var count =5;

var divisionHeight=300;
var score =0;
var divisions,ground,particle,plinkos;
//var division2 , division3 , division4 , division4 , division5 , division6 , division7 , division8 , division9;
var yellowLine;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world= engine.world;
 // ground = new Ground(width/2,height,width,20);
 //divisions = createSprite(k,height-divisionHeight/2,10,divisionHeight);
 

   for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  fill("white");
  drawSprites();
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(particle!=null) {
  particle.display();
   
  if(particle.body.position.y>760) {
    if(particle.body.position.x < 300) {
    score =score+500
    particle=null;
    }
  }

   else if(particle.body.position.y>760) {
    if(particle.body.position.x > 301 && particle.body.position.x < 600) {
    score =score+100
    particle=null;
    }
  }

  else if(particle.body.position.y>760) {
    if(particle.body.position.x > 601 && particle.body.position.x < 900) {
    score =score+200
    particle=null;
    }
  }
  count =count+1;
  
   }
  
   
  // divisions.display();
 //  division1.display();
  // division2.display();
  // division3.display();
  // division4.display();

   mousePressed();
   
   
}
function mousePressed() {
  if(gameState!=="end") 
  {
    particle =new Particle(mouseX,10,10,10);
    
  }
  particle.display();
}