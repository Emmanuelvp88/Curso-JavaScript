class Celulares {
    propiedades(tamaño, resolucion, camara, ram) {
        this.tamaño = tamaño;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
    }

    infoCel1() {
        document.write(`el celulra1 es de: ${this.tamaño},
            ${this.resolucion},${this.camara}, ${this.ram}`);
    }
}

/**Creamos un nuevo objeto en donde vamos a pasar todos los parametros */
const celulra1 = new Celulares("10'", "ful hd", "20mx", "2gb");
celulra1.infoCel1();
