//clase padre "Celulares"
class Celulares {
    /**Este es el constructor que va recibir los parametros del objeto */
    constructor(color, dimencion, resolucion, camara, ram, camEx) {
        this.color = color;
        this.dimencion = dimencion;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.cam = camEx;
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
    brabarVideo() {
        if (this.encendido == true) {
            alert("Grabando video en resolucion: " + this.resolucion);
        }
    }

    infoCel() {
        return document.write(`
        color: <b>${this.color}</b><br>
        tamaño: <b>${this.dimencion}</b><br>
        camara:<b>${this.camara}</b> <br>
        Resulucion: <b>${this.resolucion}</b> <br>
        Tien memoria ram de: <b>${this.ram}</b><br> <br>
        
        
        `);
    }
}
/**Creamos un nuevo objeto en donde vamos a pasar todos los parametros */
// const celulra1 = new Celulares("negro","5'", "ful hd", "50mx", "6gb");
// const celulra2 = new Celulares("verde","5.5'", "hd", "30mx", "2gb");
// const celulra3 = new Celulares("aqua","4.3'", "ultra hd", "70mx", "6gb");

// celulra1.botonEncender();
// celulra1.reiniciar();
// celulra1.brabarVideo();
// celulra1.tomarFoto();

// celulra1.infoCel();
// celulra2.infoCel();
// celulra3.infoCel();

class celAltaGama extends Celulares{
    costructor(color,dimencion, resolucion, camara, ram, cam) {
        Super(color, dimencion, resolucion, camara, ram);
        this.resCamEx = cam;   
    }
    grabandoVideo(){
        document.write("Estas rgabando video");
    }
    reconocimintoFacial(){
        document.write("Ejecutando reconociminto facial");
    }
    info(){
        this.infoCel() + document.write(`tiene una camara extra: <b>${this.resCamEx}</b><br>`);
    }
}

const cel1 = new celAltaGama("Negro","5.5'", "full hd", "30mpx", "3gb","40mpx");
const cel2 = new celAltaGama("Rojo","6'", "hd", "10mpx", "5gb", "80mpx" );

// document.write(`
cel1.info()
cel2.info() 
// `);