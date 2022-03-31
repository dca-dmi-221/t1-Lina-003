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
        this.creaCancion.pause()
    }   
}