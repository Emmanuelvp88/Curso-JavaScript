class Celulares {
    /**Este es el constructor que va recibir los parametros del objeto */
    constructor(dimencion, resolucion, camara, ram) {
        this.dimencion = dimencion;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        // this.info = ;
    }

    infoCel1() {
        document.write(`el celulra1 es de: ${this.dimencion},
        ${this.resolucion},${this.camara}, ${this.ram}`);
    }
}

/**Creamos un nuevo objeto en donde vamos a pasar todos los parametros */
const celulra1 = new Celulares("10'", "ful hd", "20mx", "2gb");
celulra1.infoCel1();
