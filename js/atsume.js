var bg, goods = [], cats = [];
var width, height, cax, caw;
var wratio, hratio, myw = 1440, myh = 955, myratio = myw/myh;
var tloc = [];
var cloc = [];

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  bg = loadImage('img/bg.png');

  if (false) { // thinking this part through
  if ((width/height) != myratio) {
    // find which dimension must have a padding
    var hway = height * (width/bg.width);
    var wway = width * (height/bg.height);
  } else {
    wratio = width/myw;
    hratio = height/myh;
    cax = 0;
    cay = 0;
    caw = width;
  }
}
  cax = width/8;
  caw = width * (3/4);
  console.log(height);
  createCanvas(width,height);

  // GOODIES
  goods = [
    loadImage('img/bucket.png'), loadImage('img/pyramid.png'),
    loadImage('img/cafe.png'), loadImage('img/temari.png'),
    loadImage('img/sakura.png'), loadImage('img/royal.png'),
    loadImage('img/kettle.png'), loadImage('img/rails.png')
  ];

  // CATS
  cats = [
    loadImage('img/shadow.png'), loadImage('img/pepper.png'),
    loadImage('img/marshmallow.png'), loadImage('img/sassyfran.png'),
    loadImage('img/breezy.png'), loadImage('img/kathmandu.png'),
    loadImage('img/meowgi.png'), loadImage('img/xerxes.png'),
    loadImage('img/ginger.png'), loadImage('img/conductor.png')
  ]

  // SPOT ORDER: stone, bridge, red porch, center top porch, center bottom porch, tree, left porch, tatami
  tloc.push([(caw * 0.10) + cax, height * 0.45]);
  tloc.push([(caw * 0.42) + cax, height * 0.24]);
  tloc.push([(caw * (8/28)) + cax, height * (3/5)]);
  tloc.push([(caw * 0.64) + cax, height * 0.48]);
  tloc.push([(caw * 0.45) + cax, height * 0.75]);
  tloc.push([(caw * 0.66) + cax, height * 0.80]);
  tloc.push([(caw * 0.88) + cax, height * 0.75]);
  tloc.push([(caw * 0.84) + cax, height * 0.58]);

  // CAT ORDER: bucket, pyramid, cafe top, cafe left, cafe right, temari, sakura, royal bed, kettle, rails
  cloc.push([(caw * 0.10) + cax, height * 0.45]);       // shadow
  cloc.push([(caw * 0.4055) + cax, height * 0.285]);    // pepper
  cloc.push([(caw * (8/28)) + cax, height * 0.455]);    // marshmallow
  cloc.push([(caw * (12/56)) + cax, height * (9/14)]);  // sassy fran
  cloc.push([(caw * 0.32) + cax, height * 0.607]);      // breezy
  cloc.push([(caw * (3/5)) + cax, height * (3/7)]);     // kathmandu
  cloc.push([(caw * 0.45) + cax, height * 0.70]);       // mr. meowgi
  cloc.push([(caw * 0.66) + cax, height * 0.80]);       // xerxes
  cloc.push([(caw * 0.885) + cax, height * 0.67]);      // ginger
  cloc.push([(caw * 0.77) + cax, height * 0.48]);       // conductor whiskers
}

function draw() {
  background(51);
  image(bg,cax,0,caw,height);
  for (var i = 0; i < tloc.length; i++) {
    imageMode(CENTER);
    image(goods[i],tloc[i][0],tloc[i][1],goods[i].width,goods[i].height);
  }

  for (var i = 0; i < cloc.length; i++) {
    // RNG
    imageMode(CENTER);
    image(cats[i],cloc[i][0],cloc[i][1],cats[i].width,cats[i].length);
  }
}

// add eventlistener for window resize