function dibujo(x, y) {
  push();
  translate(x, y);
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
      //Efecto de color
      if (mouseX>width/2 && mouseY>0) {
        distant = dist(mouseX, mouseY, i*tam, j*tam);
        tono = distant*150/dist(width/2, 0, width, height);
      }
      if (relleno===false) {
        fill(255, 0, 154, tono);
      } else {
        fill(0, tono);
      }
      //Figuras alternadas
      if ((i+j)%2==0) {
        ellipse(i*tam+tam/2, j*tam+tam/2, tam, tam);
      } else {
        rect(i*tam, j*tam, tam, tam);
      }
    }
  }
  pop();
}

function boton(x, y) {
  if (segundos > 4) {
    fill(255, 0, 53);
    rect(x, y, 100, 50);
    restart(x, y, 100, 50);

    if (segundos %2==0) {
      fill(255);
      textFont(fuente);
      textAlign(CENTER, CENTER);
      textSize(20);
      text("<Restart>", 100/2, 50/2);
    }
  }
}

//función que retorna un valor
function restart(ubicX, ubicY, ancho, alto) {
  if (mouseX > ubicX && mouseX < ubicX+ancho && mouseY > ubicY && mouseY < ubicY+alto) {
    return true;
  } else {
    return false;
  }
}
