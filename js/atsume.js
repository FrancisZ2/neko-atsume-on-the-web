var bg, goods = [], cats = [];
var width, height, cax, caw, cay, cah;
var wratio, hratio, ratio, myw = 1440, myh = 955, myratio = myw/myh;
var tloc = [], cloc = [];
var r = [], pr = [];
var fout, fin;
var music;

function preload() {
  music = loadSound('music.mp3');
}

function setup() {
  // HIDE LOGO
  var logo = document.getElementById("logo");
  logo.style.display = "none";

  width = window.innerWidth;
  height = window.innerHeight;
  bg = loadImage('img/bg.png');
  iw = 1024, ih = 733;

  if ((width/height) != myratio) {
    // find which dimension must have a padding
    var hway = ih * (width/iw);
    var wway = iw * (height/ih);
    if (hway > height) { // height is the constraint
      console.log("first condition!");
      cay = 0;
      cah = height;
      caw = wway;
      cax = (width - wway) / 2;
    } else {  // width is the constraint
      console.log("second condition!");
      cax = 0;
      caw = width;
      cah = hway;
      cay = (height - hway) / 2;
    }
  } else {
    console.log("third condition!");
    ratio = 1;
    cax = 0;
    cay = 0;
    caw = width;
    cah = height;
  }

  if (caw < myw || cah < myh) {
    wratio = myw / caw;
    hratio = myh / cah;
  }

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
  tloc.push([(caw * 0.10) + cax, (cah * 0.45) + cay]);
  tloc.push([(caw * 0.42) + cax, (cah * 0.24) + cay]);
  tloc.push([(caw * (8/28)) + cax, (cah * (3/5)) + cay]);
  tloc.push([(caw * 0.64) + cax, (cah * 0.48) + cay]);
  tloc.push([(caw * 0.45) + cax, (cah * 0.75) + cay]);
  tloc.push([(caw * 0.66) + cax, (cah * 0.80) + cay]);
  tloc.push([(caw * 0.88) + cax, (cah * 0.75) + cay]);
  tloc.push([(caw * 0.84) + cax, (cah * 0.58) + cay]);

  // CAT ORDER: bucket, pyramid, cafe top, cafe left, cafe right, temari, sakura, royal bed, kettle, rails
  cloc.push([(caw * 0.10) + cax, (cah * 0.45) + cay]);       // shadow
  cloc.push([(caw * 0.4055) + cax, (cah * 0.285) + cay]);    // pepper
  cloc.push([(caw * (8/28)) + cax, (cah * 0.455) + cay]);    // marshmallow
  cloc.push([(caw * (12/56)) + cax, (cah * (9/14)) + cay]);  // sassy fran
  cloc.push([(caw * 0.32) + cax, (cah * 0.607) + cay]);      // breezy
  cloc.push([(caw * (3/5)) + cax, (cah * (3/7)) + cay]);     // kathmandu
  cloc.push([(caw * 0.45) + cax, (cah * 0.70) + cay]);       // mr. meowgi
  cloc.push([(caw * 0.66) + cax, (cah * 0.80) + cay]);       // xerxes
  cloc.push([(caw * 0.885) + cax, (cah * 0.67) + cay]);      // ginger
  cloc.push([(caw * 0.77) + cax, (cah * 0.48) + cay]);       // conductor whiskers

  // TIME DIV
  var div = document.getElementById('time');
  div.style.width = caw + "px";
  div.style.height = cah + "px";
  div.style.marginLeft = cax + "px";
  div.style.marginTop = cay + "px";

  // TIME OF DAY
  var h = new Date().getHours();
  div.classList.remove("night","day","dusk","dawn");
  if (h <= 5 || h >= 20) {
    div.classList.add("night");
  } else if (h > 5 && h <= 8) {
    div.classList.add("dawn");
  } else if (h > 8 && h <= 17) {
    div.classList.add("day");
  } else {
    div.classList.add("dusk");
  }

  // RANDOM APPEARANCE
  for (var i = 0; i < cloc.length; i++) {
    r.push(Math.round(Math.random(0,1)));
    pr.push(0);
  }
  fout = 255, fin = 0;

  // MUSIC
  if (music.isLoaded()) { music.loop(); }

  window.setInterval(placement, 30000);
}

function draw() {
  background(51);
  image(bg,cax,cay,caw,cah);
  for (var i = 0; i < tloc.length; i++) {
    imageMode(CENTER);
    image(goods[i],tloc[i][0],tloc[i][1],goods[i].width / wratio,goods[i].height / hratio);
  }

  for (var i = 0; i < cloc.length; i++) {
    if (pr[i] == 1 && r[i] == 1) {
      imageMode(CENTER);
      image(cats[i],cloc[i][0],cloc[i][1],cats[i].width / wratio,cats[i].height / hratio);
    } else if (pr[i] == 0 && r[i] == 0) {
    } else if (pr[i] == 0 && r[i] == 1) {  // FADE IN
      imageMode(CENTER);
      tint(255,fin);
      image(cats[i],cloc[i][0],cloc[i][1],cats[i].width / wratio,cats[i].height / hratio);
    } else if (pr[i] == 1 && r[i] == 0) {   // FADE OUT
      imageMode(CENTER);
      tint(255,fout);
      image(cats[i],cloc[i][0],cloc[i][1],cats[i].width / wratio,cats[i].height / hratio);
    }
  }
  fout -= 15; fout = Math.max(0, fout);
  fin += 15; fin = Math.min(255, fin);
}

function placement() {
  for (var i = 0; i < cloc.length; i++) {
    pr[i] = r[i];
    r[i] = Math.round(Math.random(0,1));
  }
  fout = 255, fin = 0;
}