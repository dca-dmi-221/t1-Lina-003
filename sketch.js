
let imgHome;
let danger;
let pantalla1;
//let pantalla2;


function setup() {
  createCanvas(1328, 747);
  danger = new Cancion({nombre: "danger", ubicacion: 'Assets/danger.mp3'});

  pantalla1 = new Pantalla({imagen: 'Assets/Pantalla1.jpg'});
  //pantalla2 = new Pantalla({imagen: 'Assets/Danger.jpg'});
}

function draw() {
}

function mousePressed() {
  if(dist(mouseX, mouseY, 99, 228) < 70) {
    danger.playCancion();
  }

}


/*switch (pantalla) {

  case 0:
    showPantalla1();
  break;

  case 1:
    showPantalla2();
  break;
}
}*/