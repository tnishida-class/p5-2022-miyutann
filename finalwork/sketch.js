// 最終課題を制作しよう

const g = 3;
const ground = 40;

let size, x, y, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  size = 50;
  x = 50;
  y = height - ground - size / 2;
  vy = 0;
  snows = [];
}

function draw(){
  background(140, 165, 200);
  fill(255);
  noStroke();

  for(let i = 0; i < snows.length; i++){
    let s = snows[i];
    ellipse(s.x, s.y, s.size);
    s.x += s.vx;
    s.y += s.vy;
    if(s.y > height - ground){snows.shift(s)};
  }
  const s = { x: random(width), y: 0, size: random(4, 10), vx: random(-0.3,0.3), vy: 1.5 };
  snows.push(s);

  let gy = height - ground; 
  rect(0, gy, width, gy);

  ellipse(x, y + 2, size);

  y -= vy;

  if(y < height - ground - size / 2){
    vy -= g;
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
  
  if(keyIsDown(LEFT_ARROW)){x -= 5 ; if(y >= height - ground - size / 2){size +=0.3}};
  if(keyIsDown(RIGHT_ARROW)){x += 5; if(y >= height - ground - size / 2){size +=0.3}};
  if(keyIsDown("C".charCodeAt(0))){size=50}

  ellipse(1200, height - ground - 73, 150)
  if(y< height - ground - 190 && x < 1240 && x > 1180){
    vy = 0;
    y = height - ground - size/2 - 140;
    fill(91, 71, 34);
    ellipse(x - size/6, y - size/6, size/20);
    ellipse(x + size/6, y - size/6, size/20);
    fill(245, 130, 32)
    triangle(x, y-size/10, x - size/10, y + size/23, x + size/6, y + size/10);
  }

  instruction("スペースキーでジャンプ、矢印で左右移動、Cでリセット", 15, 60 ,60, 0, 255);

}

function keyPressed(){
  if(key == " "){vy = 30}
}

function instruction(t, ts, x, y, c, bc){
  let w = textWidth(t);
  let h = textAscent()
  let p = 15;
  stroke(0)
  fill(bc);
  rect(x-2, y-2, w + p * 2 + 4, h + p * 2 + 4);
  noStroke();
  fill(c);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  textSize(ts);
  text(t, x + p, y+ h + p);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
