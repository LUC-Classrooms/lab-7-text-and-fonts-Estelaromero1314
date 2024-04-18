/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Times New Roman");
}

function draw() {
  background(200);
  if (mouseIsPressed) {
   
    textFont("Georgia"); 
    textSize(40); 
    text("Hellooo.", 20, 130); 
  } else {
    textFont("Times New Roman"); 
    textSize(18); 
    text("Hiii!", 30, 120); 
  }
}
