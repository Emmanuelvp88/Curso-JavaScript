//clase padre "Celulares"
class Celulares {
    /**Este es el constructor que va recibir los parametros del objeto */
    constructor(dimencion, resolucion, camara, ram) {
        this.dimencion = dimencion;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncender() {
        if (this.encendido == false) {
            alert("el celular esta encendiendo...");
            this.encendido = true;
        } else {
            alert("el celular esta apagando...");
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("El celular se esta reiniciando...");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto() {
        if (this.encendido == true) {
            alert("La foto se atomado en una resolucion de: " + this.resolucion);
        }
    }
    brabarVideo(){
        if(this.encendido == true){
            alert("Grabando video en resolucion: " + this.resolucion);
        }
    }

    infoCel() {
       return document.write(`
        el celulra es de:<b>${this.dimencion}</b> <br>
        Resulucion de: :<b>${this.resolucion}</b> <br>
        Tien memoria ram de: <b>${this.ram}</b> <br>
        tiene una camara de: <b>${this.camara}</b> <br><br>
        
        `);
    }
}
/**Creamos un nuevo objeto en donde vamos a pasar todos los parametros */
const celulra1 = new Celulares("5'", "ful hd", "50mx", "6gb");
const celulra2 = new Celulares("5.5'", "hd", "30mx", "2gb");
const celulra3 = new Celulares("4.3'", "ultra hd", "70mx", "6gb");

celulra1.botonEncender();
celulra1.reiniciar();
celulra1.brabarVideo();
celulra1.tomarFoto();

celulra1.infoCel();
celulra2.infoCel();
celulra3.infoCel();