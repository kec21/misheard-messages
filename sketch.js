//I want to build off of the idea of a hearing loss or deafness simulator by adding an element of humor. I have been keeping several lists in my sketchbooks, on notes on my phone, and on post it notes of all the misheard words and phrases that have struck me as humorous. I was also thinking about finding a way to tie this back to an idea I had in my bookmaking class about thaumatropes. I had wanted to make visuals that melded together to visually talk about the way speech gets garbled and how my brain struggles to come up with possible matches, even when those words do not fit with the conversation. I want to play with the screen reader in conjunction with this, and will start experimenting with images and words. I will start by collecting the lists and selecting the most interesting or funny words pairings.



function draw() {
  background(255);
  // changes
}

var fade;
var fadeAmount = 1

function setup() {
  createCanvas(800, 800);
  textSize(50)
  fade = 0
}

function draw() {
  fill(255, 0, 0, fade)
  text("hello", 50,50)
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade)
  text("goodbye", 100,200)
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade)
}

var rectWidth = 1000;
var rectHeight = 600;
var colourlapse;
var rx = 60;
var ry = 60;
var inc = 0.005;


let colors = [[0, 0, 0], [255, 255, 255], [255, 9, 236]]
let cur_col1 = 1;
let cur_col2 = 0;

let textContents = ["text number one","text number two","text number three"];

function setup() {
  frameRate(49);
  createCanvas(1100, 1100);
  colourlapse = 0.0;
}

function draw() {
  var w = colourlapse * rectWidth;
  var sx1 = (inc > 0) ? rx : rx + rectWidth - w;
  var sx2 = (inc > 0) ? rx + w : rx;

  background(255);
  stroke(255);

  let index1 = cur_col1 % colors.length;
  let index2 = cur_col2 % colors.length;
  fill(colors[index1]);
  rect(sx1, ry, w, rectHeight);
  // text
  fill(127);
  text(textContents[index1],sx2,ry);
  
  fill(colors[cur_col2 % colors.length]);
  rect(sx2, ry, rectWidth-w, rectHeight);

  colourlapse += inc;
  if (colourlapse >= 1) {
      colourlapse = 1;
      inc *= -1;
      cur_col2 += 2;
  } else if (colourlapse <= 0) {
      colourlapse = 0;
      inc *= -1;
      cur_col1 += 2;
  }
}