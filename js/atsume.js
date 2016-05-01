var bg, cafe, temari, sfran, marsh, kath;
var width, height, cax, caw;
var tloc = [];
var cloc = {
  "cafe-right": [],
  "cafe-left": [],
  "cafe-top": [],
};

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  cax = width/8;
  caw = width * (3/4);
  createCanvas(width,height);
  bg = loadImage('img/bg.png');

  // GOODIES
  cafe = loadImage('img/cafe.png');
  temari = loadImage('img/temari.png');

  // CATS
  sfran = loadImage('img/sassyfran.png');
  marsh = loadImage('img/marshmallow.png');
  kath = loadImage('img/kathmandu.png');

  // SPOT ORDER: stone, bridge, red porch, center top porch, center bottom porch, tree, left porch, tatami
  tloc.push([(caw/12) + cax, height * (3/7)]);
  tloc.push([(caw * (2/5)) + cax, height * (3/14)]);
  tloc.push([(caw * (8/28)) + cax, height * (3/5)]);
  tloc.push([(caw * (3/5)) + cax, height * (3/7)]);
  tloc.push([(caw * (3/7)) + cax, height * (5/7)]);
  tloc.push([(caw * (9/14)) + cax, height * (23/28)]);
  tloc.push([(caw * (6/7)) + cax, height * (5/7)]);
  tloc.push([(caw * (23/28)) + cax, height * (15/28)]);

  // CAFE
  cloc["cafe-left"].push([(caw * (12/56)) + cax, height * (9/14)]);
  cloc["cafe-top"].push([(caw * (8/28)) + cax, height * (13/28)]);
}

function draw() {
  background(51);
  image(bg,cax,0,caw,height);
  imageMode(CENTER);
  for (var i = 0; i < tloc.length; i++) {
    if (i == 2) {
      image(cafe,tloc[i][0],tloc[i][1],cafe.width,cafe.height);
    } else if (i == 3) {
      image(temari,tloc[i][0] + 50,tloc[i][1] + 25,temari.width/2,temari.height/2);
    } else {
      rect(tloc[i][0],tloc[i][1],50,50);
    }
  }

  image(sfran,(caw * (12/56)) + cax, height * (9/14),sfran.width * (4/7),sfran.height * (4/7));
  image(marsh,(caw * (8/28)) + cax, height * (13/28),marsh.width,marsh.height);
  image(kath,(caw * (3/5)) + cax, height * (3/7),kath.width,kath.height);
}

// add eventlistener for window resize