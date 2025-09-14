let x;
let y;

function setup() {
  createCanvas(800, 800);
  x = int(random(800));
  y = int(random(800));
}

function draw() {
  // fundo azul claro
  background(135, 206, 235);

  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 800);
  y = constrain(y, 0, 800);

  let distancia = dist(mouseX, mouseY, x, y);

  fill(255, 0, 0, 150);
  stroke(0);
  circle(mouseX, mouseY, distancia);

  //circle(x, y, 10); 

  if (distancia < 3) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Encontrei!", width / 2, height / 2);
    noLoop();
  }
}
