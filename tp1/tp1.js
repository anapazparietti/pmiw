/*Ana Paz Parietti
 comisión 1
 https://youtu.be/Q1XigHsYU8o
 */

let obra;
let fuente;
let cant, tam; //var  para aumentar la cantidad y tamaño de las formas
let tono, distant; //var efecto en el color
let segundos;
let relleno;//var para pasar el color de negro a rosa, tipo boolean

function preload() {
  obra = loadImage('/data/obra.jpg');
  fuente = loadFont('/data/blog.otf');
}


function setup() {
  createCanvas(800, 400);
  noStroke();
  cant = 20;
  tam = (width/2)/cant;
  relleno = true;
  segundos = 0;
}


function draw() {
  background(255);
  image(obra, 0, 0, width/2, height);
  push();
  translate(width/2, 0);
  dibujo(0, 0);
  boton(0, 0);
  pop();

  //Tiempo
  if (frameCount%60 == 0) {
    segundos++;
  }
}

function keyPressed() {
  if (key=='r' || key=='R') {
    tam = (width/2)/cant;
    segundos=0;
    relleno=true;
    tono=255;
  }
}

function mousePressed() {
  if (mouseX>width/2 && mouseY>0 && mouseX<width && mouseY<height) {
    tam++;
    relleno=!relleno;
  }
  //Reiniciar
  if (restart(width/2, 0, 100, 50) && segundos>4) {
    tam = (width/2)/cant;
    tono=0;
    relleno = true;
    segundos=0;
  }
}
