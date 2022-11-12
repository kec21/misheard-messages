//I want to build off of the idea of a hearing loss or deafness simulator by adding an element of humor. I have been keeping several lists in my sketchbooks, on notes on my phone, and on post it notes of all the misheard words and phrases that have struck me as humorous. I was also thinking about finding a way to tie this back to an idea I had in my bookmaking class about thaumatropes. I had wanted to make visuals that melded together to visually talk about the way speech gets garbled and how my brain struggles to come up with possible matches, even when those words do not fit with the conversation. I want to play with the screen reader in conjunction with this, and will start experimenting with images and words. I will start by collecting the lists and selecting the most interesting or funny words pairings.



function setup() {
  smooth();
  createCanvas(windowWidth, windowHeight);
  // Make a <p> element and put it behind the canvas
  let p = createP('QUITE');
  p.center();
  p.style('font-size', '50px');
  p.style('text-align', 'center');
  p.style('z-index', '-9999');
}

function draw() {
  background(250, 250, 150);
  fill(15, 195, 185);
  noStroke();
  textSize(100);
  text('QUIET', 50, 100);
  fill(0, 102, 153);
  erase();
  translate(0, 0, 40);
  noErase();
}