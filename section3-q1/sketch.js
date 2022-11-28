// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
const g = 5;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  v = 0;
  h = height;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size = count
  if(size <75){size = 70}
  if(keyIsDown("A".charCodeAt(0))){count =  (count + 2) % cycle}
  if(keyIsDown(LEFT_ARROW)){width -= 10}
  if(keyIsDown(RIGHT_ARROW)){width += 10};
  h -= v; v -= g;
  h = constrain(h, -height, height)
  ellipse(width / 2, h / 2, size);
}
function keyPressed(){
  if(key == " "){v= 50}
}