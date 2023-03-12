//clase padre "Celulares"
class Celulares {
    /**Este es el constructor que va recibir los parametros del objeto */
    constructor(color, dimencion, resolucion, camara, ram) {
        this.color = color;
        this.dimencion = dimencion;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    //metodo encender
    botonEncender() {
        if (this.encendido == false) {
            alert("el celular esta encendiendo...");
            this.encendido = true;
        } else {
            alert("el celular esta apagando...");
        }
    }
    //metodo reiniciar
    reiniciar() {
        if (this.encendido == true) {
            alert("El celular se esta reiniciando...");
        } else {
            alert("El celular esta apagado");
        }
    }
    //metodo tomarfoto
    tomarFoto() {
        if (this.encendido == true) {
            alert("La foto se atomado en una resolucion de: " + this.resolucion);
        }else{
            alert(`No puede tomar foto el celular esta apagado..`);
        }
    }
    //metodo grabar video
    brabarVideo() {
        if (this.encendido == true) {
            alert("Grabando video en resolucion: " + this.resolucion);
        }
    }
    //Metodo para mostrar toda la data info
    infoCel() {
        return document.write(`
        color: <b>${this.color}</b><br>
        tamaño: <b>${this.dimencion}</b><br>
        Resulucion: <b>${this.resolucion}</b> <br>
        camara:<b>${this.camara}</b> <br>
        Tien memoria ram de: <b>${this.ram}</b><br><br>
        `);
    }
}
/**Creamos tres nuevos objetos y le asignamos todos atributos */
const celulra1 = new Celulares("negro", "5'", "ful hd", "50mx", "6gb", "23");
const celulra2 = new Celulares("verde", "5.5'", "hd", "30mx", "2gb");
const celulra3 = new Celulares("aqua", "4.3'", "ultra hd", "70mx", "6gb");
//mandamos a llamar todos los metodos para que realice las acciones que queremos
celulra1.botonEncender();
celulra1.reiniciar();
celulra1.brabarVideo();
celulra1.tomarFoto();
//LLmamamos los objetos con el metodo para mostrar la data la info
celulra1.infoCel();
celulra2.infoCel();
celulra3.infoCel();

//Creamos nueva clase "celAltaGama" donde ponemso la palabra "extends" que sirve para heredar la clase "Celulares"
class celAltaGama extends Celulares {
    constructor(color, dimencion, resolucion, camara, ram, cam) {
        //La palabra reservada "super" es para reciclar los atributos de la clase "Celulares" 
        super(color, dimencion, resolucion, camara, ram);
        this.camEx = cam;
    }
    // metodo para grabar video
    grabandoVideo() {
        alert("Estas rgabando video");
    }
    // metodo para el reconiciminto facila
    reconocimintoFacial() {
        alert("Ejecutando reconociminto facial");
    }
    //Agregamos otro metodo para mostrar la data, el cual lleva dentro el otro metodo "infoCel"
    infoaltaGama() {
        return (
            this.infoCel() +
            document.write(`Resulucion de camara extra: <b>${this.camEx}</b><br><br>`)
        );
    }
}

//creamos dos nuevos objetos de la clase "celAltaGama" y le damos sus atributos
const cel1 = new celAltaGama("Negro", "5.5'", "Full HD", "30mpx", "3gb", "superFull HD");
const cel2 = new celAltaGama("Rojo", "6'", "hd", "10mpx", "5gb", "Full HD");

cel1.grabandoVideo();
cel1.reconocimintoFacial();

cel1.infoaltaGama();
cel2.infoaltaGama();
