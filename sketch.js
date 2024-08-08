function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw() {
  
  stroke("white");
  fill("gold");
  
  // console.log(mouseIsPressed);
 
  if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 20);
  }
  
}
