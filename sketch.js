var thickness,wall;
var speed;
var weight ,bullet;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2)
  speed = random(223,321);
  weight = random(30,52);
  
}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed; 
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX = 0;
  var def=0.5*weight*speed*speed/(thickness*thickness*thickness); 
 }
  if(def>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if(def<=10)
   {
   wall.shapeColor=color(0,255,0);
   }
   drawSprites();
  }
 function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}