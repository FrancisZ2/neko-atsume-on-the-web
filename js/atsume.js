var bg;
var width, height, cax, caw;
var tloc = [];

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  cax = width/8;
  caw = width * (3/4);
  createCanvas(width,height);
  bg = loadImage('img/bg.png');

  // SPOT ORDER: stone, bridge, red porch, center top porch, center bottom porch, tree, left porch, tatami
  tloc.push([(caw/12) + cax, height * (3/7)]);
  tloc.push([(caw * (2/5)) + cax, height * (3/14)]);
  tloc.push([(caw * (7/28)) + cax, height * (3/5)]);
  tloc.push([(caw * (3/5)) + cax, height * (3/7)]);
  tloc.push([(caw * (3/7)) + cax, height * (5/7)]);
  console.log(tloc);
}

function draw() {
  background(51);
  image(bg,cax,0,caw,height);
  imageMode(CENTER);
  rect((caw * (3/7)) + cax, height * (5/7),50,50);
}

// add eventlistener for window resize