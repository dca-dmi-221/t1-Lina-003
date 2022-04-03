
let imgHome;
let danger;
let elevate;
let invincible;
let wayUp;
let scared;
let dangerIsPlaying;
let elevateIsPlaying;
let invincibleIsPlaying;
let wayUpIsPlaying;
let scaredIsPlaying;
let pantalla;
let pantalla1;
let pantalla2;


function setup() {
  pantalla = 0;
  dangerIsPlaying = false;
  elevateIsPlaying = false;
  invincibleIsPlaying = false;
  wayUpIsPlaying = false;
  scaredIsPlaying = false;
  createCanvas(1328, 747);
  danger = new Cancion({nombre: "danger", ubicacion: 'Assets/danger.mp3'});
  elevate = new Cancion({nombre: "elevate", ubicacion: 'Assets/y2mate.com - Elevate.mp3'});
  invincible = new Cancion({nombre: "invincible", ubicacion: 'Assets/y2mate.com - Invincible.mp3'});
  wayUp = new Cancion({nombre: "way up", ubicacion: 'Assets/y2mate.com - Way Up.mp3'});
  scared = new Cancion({nombre: "scared", ubicacion: 'Assets/y2mate.com - Scared of the Dark.mp3'});
  

  pantalla1 = new Pantalla({imagen: 'Assets/Pantalla1.jpg'});
  pantalla2 = new Pantalla({imagen: 'Assets/Pantalla2.jpg'});
}

function draw() {

  switch (pantalla) {

    case 0:
      pantalla1.show();
    break;
  
    case 1:
      pantalla2.show();
    break;
  }
}

function mousePressed() {

  switch (pantalla) {

    case 0:
    if(dist(mouseX, mouseY, 100, 228) < 70) {
    danger.playCancion();

    dangerIsPlaying = !dangerIsPlaying;
    }

    if(dist(mouseX, mouseY, 100, 228) < 70 && !dangerIsPlaying) {
    danger.pausaCancion();

    dangerIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 100, 322) < 70) {
    wayUp.playCancion();

    wayUpIsPlaying = !wayUpIsPlaying;
    }

    if(dist(mouseX, mouseY, 100, 322) < 70 && !wayUpIsPlaying) {
    wayUp.pausaCancion();

    wayUpIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 100, 413) < 70) {
    invincible.playCancion();

    invincibleIsPlaying = !invincibleIsPlaying;
    }

    if(dist(mouseX, mouseY, 100, 413) < 70 && !invincibleIsPlaying) {
    invincible.pausaCancion();

    invincibleIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 100, 506) < 70) {
    scared.playCancion();

    scaredIsPlaying = !scaredIsPlaying;
    }

    if(dist(mouseX, mouseY, 100, 506) < 70 && !scaredIsPlaying) {
    scared.pausaCancion();

    scaredIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 1274, 398) < 70) {
    pantalla = 1;
    }
  
  break;
  }



}
