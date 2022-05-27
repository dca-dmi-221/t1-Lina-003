class Pantalla {
    constructor({imagen}) {
        this.imagen = imagen;
        this.fondo = loadImage(imagen);

    }
    show() {
        image(this.fondo, 0,0);
    }
}