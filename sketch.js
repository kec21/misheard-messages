//I want to build off of the idea of a hearing loss or deafness simulator by adding an element of humor. I have been keeping several lists in my sketchbooks, on notes on my phone, and on post it notes of all the misheard words and phrases that have struck me as humorous. I was also thinking about finding a way to tie this back to an idea I had in my bookmaking class about thaumatropes. I had wanted to make visuals that melded together to visually talk about the way speech gets garbled and how my brain struggles to come up with possible matches, even when those words do not fit with the conversation. I want to play with the screen reader in conjunction with this, and will start experimenting with images and words. I will start by collecting the lists and selecting the most interesting or funny words pairings.


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // changes
}

var fade;
var fadeAmount = 1

function setup() {
  createCanvas(400, 400);
  textSize(100)
  fade = 0
}

function draw() {
  background(220);
  fill(255, 0, 0, fade)
  text("hello", 400,400)
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade)
}

var fade;
var fadeAmount = 1

function setup() {
  createCanvas(400, 400);
  textSize(100)
  fade = 0
}

function draw() {
  background(220);
  fill(255, 0, 0, fade)
  text("goodbye", 100,100)
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade)
}