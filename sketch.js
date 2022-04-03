
let familia;
let hide;
let home;
let sunflower;
let saveTheDay;
let riot;
let memories;
let danger;
let elevate;
let invincible;
let wayUp;
let scared;
let homeIsPlaying;
let familiaIsPlaying;
let hideIsPlaying;
let sunflowerIsPlaying;
let saveTheDayIsPlaying;
let riotIsPlaying;
let memoriesIsPlaying;
let dangerIsPlaying;
let elevateIsPlaying;
let invincibleIsPlaying;
let wayUpIsPlaying;
let scaredIsPlaying;
let pantalla;
let pantalla1;
let pantalla2;
let pantalla3;


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
  familia = new Cancion({nombre: "familia", ubicacion: 'Assets/y2mate.com - Familia SpiderMan Into the SpiderVerse.mp3'});
  hide = new Cancion({nombre: "hide", ubicacion: 'Assets/y2mate.com - Hide.mp3'});
  home = new Cancion({nombre: "home", ubicacion: 'Assets/y2mate.com - Home.mp3'});
  sunflower = new Cancion({nombre: "sunflower", ubicacion: 'Assets/y2mate.com - Post Malone Swae Lee  Sunflower SpiderMan Into the SpiderVerse.mp3'});
  saveTheDay = new Cancion({nombre: "savetheday", ubicacion: 'Assets/y2mate.com - Save The Day.mp3'});
  riot = new Cancion({nombre: "riot", ubicacion: 'Assets/y2mate.com - Start a Riot.mp3'});
  memories = new Cancion({nombre: "memories", ubicacion: 'Assets/y2mate.com - Thutmose  Memories SpiderMan Into The SpiderVerse.mp3'});
  

  pantalla1 = new Pantalla({imagen: 'Assets/Pantalla1.jpg'});
  pantalla2 = new Pantalla({imagen: 'Assets/Pantalla2.jpg'});
  pantalla3 = new Pantalla({imagen: 'Assets/Pantalla3.png'});
}

function draw() {

  switch (pantalla) {

    case 0:
      pantalla1.show();
    break;
  
    case 1:
      pantalla2.show();
    break;

    case 3:
      pantalla3.show();
    break;
  }
}

function mousePressed() {

  switch (pantalla) {

    case 0:
    if(dist(mouseX, mouseY, 310, 275) < 50) {
    danger.playCancion();
    wayUp.pausaCancion();
    invincible.pausaCancion();
    scared.pausaCancion();

    dangerIsPlaying = !dangerIsPlaying;
    }

    if(dist(mouseX, mouseY, 888, 345) < 50 && !dangerIsPlaying) {
    danger.pausaCancion();

    dangerIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 310, 367) < 50) {
    wayUp.playCancion();
    danger.pausaCancion();
    invincible.pausaCancion();
    scared.pausaCancion();

    wayUpIsPlaying = !wayUpIsPlaying;
    }

    if(dist(mouseX, mouseY, 888, 551) < 50 && !wayUpIsPlaying) {
    wayUp.pausaCancion();

    wayUpIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 310, 460) < 50) {
    invincible.playCancion();
    danger.pausaCancion();
    wayUp.pausaCancion();
    scared.pausaCancion();

    invincibleIsPlaying = !invincibleIsPlaying;
    }

    if(dist(mouseX, mouseY, 888, 551) < 50 && !invincibleIsPlaying) {
    invincible.pausaCancion();

    invincibleIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 310, 550) < 50) {
    scared.playCancion();
    danger.pausaCancion();
    wayUp.pausaCancion();
    invincible.pausaCancion();

    scaredIsPlaying = !scaredIsPlaying;
    }

    if(dist(mouseX, mouseY, 888, 551) < 50 && !scaredIsPlaying) {
    scared.pausaCancion();

    scaredIsPlaying = false;
    }

    if(dist(mouseX, mouseY, 1274, 398) < 50) {
    pantalla = 1;
    }
  
  break;

  case 1:
    if(dist(mouseX, mouseY, 310, 275) < 50) {
      home.playCancion();
      elevate.pausaCancion();
      familia.pausaCancion();
      saveTheDay.pausaCancion();
  
      homeIsPlaying = !homeIsPlaying;
      }
  
      if(dist(mouseX, mouseY, 888, 551) < 50 && !homeIsPlaying) {
      home.pausaCancion();
  
      homeIsPlaying = false;
      }
  
      if(dist(mouseX, mouseY, 310, 367) < 50) {
      elevate.playCancion();
      home.pausaCancion();
      familia.pausaCancion();
      saveTheDay.pausaCancion();
  
      elevateIsPlaying = !elevateIsPlaying;
      }
  
      if(dist(mouseX, mouseY, 888, 551) < 50 && !elevateIsPlaying) {
      elevate.pausaCancion();
  
      elevateIsPlaying = false;
      }
  
      if(dist(mouseX, mouseY, 310, 460) < 50) {
      familia.playCancion();
      home.pausaCancion();
      elevate.pausaCancion();
      saveTheDay.pausaCancion();
  
      familiaIsPlaying = !familiaIsPlaying;
      }
  
      if(dist(mouseX, mouseY, 888, 551) < 50 && !familiaIsPlaying) {
      familia.pausaCancion();
  
      familiaIsPlaying = false;
      }
  
      if(dist(mouseX, mouseY, 310, 550) < 50) {
      saveTheDay.playCancion();
      home.pausaCancion();
      elevate.pausaCancion();
      familia.pausaCancion();
  
      saveTheDayIsPlaying = !saveTheDayIsPlaying;
      }
  
      if(dist(mouseX, mouseY, 888, 551) < 50 && !saveTheDayIsPlaying) {
      saveTheDay.pausaCancion();
  
      saveTheDayIsPlaying = false;
      }

      if(dist(mouseX, mouseY, 48, 413) < 50) {
      pantalla = 0;
      }
      
      if(dist(mouseX, mouseY, 1274, 398) < 50) {
      pantalla = 2;
      }
    
    break;

  }



}
