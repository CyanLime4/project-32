function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  button = createButton("Click to blow!")
  button.position(width/2,height-100);
  button.class("blowButton")
  button.mousePresssed(blow);
  drawSprites();
}
function blow(){
  Matter.Body.applyForce(ball.body, {x:0,y:0},{x:0,y:0.05});
}
class ball{
  const Engine = Matter.Engine;
}