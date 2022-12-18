
//clase padre "Celulares"
class Celulares {
    /**Este es el constructor que va recibir los parametros del objeto */
    constructor(dimencion, resolucion, camara, ram) {
        this.dimencion = dimencion;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        // this.info = this.dimencion, this.camara, this.ram, this.resolucion ;
        // this.encendido = true;

    }
    // encender(){
    //     if(this.encendido == true){
    //         alert("el celular esta encendiendo");
    //         // this.encendido = false;
    //     }else{
    //         alert("el celular esta apagado");
    //     }
    // }
    // reiniciar(){
    //     if(this.encendido == true){
    //         document.write("El celular se esta reiniciando...");
    //         this.encendido = false;
    //     }else{
    //         document.write("El celular esta apagado");
    //     }
    // }
    // tomarFoto(){
    //     if(){

    //     }
    // }

    infoCel() {
        // document.write(`el celulra es de: ${this.dimencion},
        // ${this.resolucion},${this.camara}, ${this.ram}`);
        // document.write(this.info);
    }
}

/**Creamos un nuevo objeto en donde vamos a pasar todos los parametros */
const celulra1 = new Celulares("5'", "ful hd", "50mx", "6gb");
const celulra2 = new Celulares("5.5'", "hd", "30mx", "2gb");
const celulra3 = new Celulares("4.3'", "ultra hd", "70mx", "6gb");

document.write(`${celulra1.infoCel()}`)
document.write(`${celulra2.infoCel()}`)
document.write(`${celulra3.infoCel()} <br>`)

