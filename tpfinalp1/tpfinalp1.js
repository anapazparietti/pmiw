let dibujos = [];
let historia=[];
let cant=0;
let estado;

function preload() {
  historia=loadStrings("data/bestiario.txt");
  for (let i=0; i<4; i++) {
    dibujos[i] = loadImage("data/pant"+i+".jpg");
  }
}
function setup() {
  createCanvas(640, 480);
  textSize(18);
  estado = 0;
}


function draw() {
  background(200);
  if (estado === 0) {
    pantalla(dibujos[0], 0, 0, 640, 480, RIGHT);
  } else if (estado===1) {
    pantalla(dibujos[1], 0, 0, 640, 480, RIGHT);
  } else if (estado===2) {
    pantalla(dibujos[2], 0, 0, 640, 480, RIGHT);
  } else {
    pantalla(dibujos[3], 0, 0, 640, 480, RIGHT);
  }
  fill(255);
  text(historia[cant], 50, 50, 500);
}
function pantalla(ft, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(ft, x, y, ancho, alto);
}

function mousePressed () {
  cant=cant+1;
  estado++;
}
