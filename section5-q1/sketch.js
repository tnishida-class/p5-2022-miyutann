// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(0);
  balloon("I love keyakizaka46",100 ,50, 94, 185, 84, 178, 100, 162);
}

function balloon(t, x, y, c1, c2, c3, bc1, bc2, bc3){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10; //padding
  noStroke();
  fill(bc1, bc2, bc3);
  rect(x+2, y+2, w+p*2+2, h+p*2+2);
  fill(bc1, bc2, bc3);
  triangle(x+p+w/2-3, y+h+p*2+2, x+p+w/2+1,h+y+p*2+12,x+p+w/2+7,h+y+p*2+2)
  fill(c1, c2, c3);
  rect(x, y, w + p * 2, h + p * 2);
  fill(c1, c2, c3);
  triangle(x+p+w/2-5, y+h+p*2, x+p+w/2,h+y+p*2+10,x+p+w/2+5,h+y+p*2)
  fill(255);
  stroke(bc1, bc2, bc3)
  text(t, x + p, y+ h + p);
}
