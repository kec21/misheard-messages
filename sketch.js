//I want to build off of the idea of a hearing loss or deafness simulator by adding an element of humor. I have been keeping several lists in my sketchbooks, on notes on my phone, and on post it notes of all the misheard words and phrases that have struck me as humorous. I was also thinking about finding a way to tie this back to an idea I had in my bookmaking class about thaumatropes. I had wanted to make visuals that melded together to visually talk about the way speech gets garbled and how my brain struggles to come up with possible matches, even when those words do not fit with the conversation. I want to play with the screen reader in conjunction with this, and will start experimenting with images and words. I will start by collecting the lists and selecting the most interesting or funny words pairings.



let img;
let topLayer;

function preload() {
  img = loadImage(image.png);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  topLayer = createGraphics(w, h);

  topLayer.background(200);
  topLayer.textSize(50);
  topLayer.textAlign(CENTER);
  topLayer.text("SCRATCH ME", width/2, height/2);

  topLayer.strokeWeight(40);
  topLayer.blendMode(REMOVE);
}

function draw() {
  background(100)
}