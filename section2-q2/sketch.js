// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)% 2 ==1 ){fill(125); rect(i*8 , j* 8, 8, 8)
        if(j<3){fill(255,0,0); ellipse(8*(i+0.5),8*(j+0.5),8)};
        if(4<j){fill(0); ellipse(8*(i+0.5),8*(j+0.5),8)}}
      else{fill(255), rect(i*8 , j* 8, 8, 8)}
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
