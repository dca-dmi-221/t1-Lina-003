class Cancion {
    constructor({nombre, ubicacion, duracion}) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.duracion = duracion;

        this.creaCancion = createAudio(ubicacion);
    }
    playCancion() {
        this.creaCancion.play()
    }
    pausaCancion() {
        this.creaCancion.stop()
    }
    draw() {
        fill(225);
        textSize(27);
        textFont('Verdana');
        text(this.nombre, 765, 476);
    }
    pintarTiempo() {
        fill(225);
        textSize(17);
        textFont('Verdana');
        text(this.duracion, 1112, 514);
    }
    
}