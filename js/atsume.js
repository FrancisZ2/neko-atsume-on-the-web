var bg;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bg = loadImage('img/bg.png');
}

function draw() {
  image(bg,0,0,600,450);
}