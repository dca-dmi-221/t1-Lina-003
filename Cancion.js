class Cancion {
    constructor({nombre, ubicacion}) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;

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
    n() {
        
    }
}