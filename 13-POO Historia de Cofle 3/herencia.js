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
        }else{
            alert(`No puedes grabar video el celular esta apagado..`);
        }
    }
    //Metodo para mostrar toda la data info
    infoCel() {
        document.write(`<br>
        color: <b>${this.color}</b><br>
        tamaño: <b>${this.dimencion}</b><br>
        Resulucion: <b>${this.resolucion}</b><br>
        camara:<b>${this.camara}</b><br>
        Tien memoria ram de: <b>${this.ram}</b><br>
        `);
    }
}
/**Creamos tres nuevos objetos y le asignamos todos atributos */
const celular1 = new Celulares("negro", "5'", "ful hd", "50mx", "6gb", "23");
const celular2 = new Celulares("verde", "5.5'", "hd", "30mx", "2gb");
const celular3 = new Celulares("aqua", "4.3'", "ultra hd", "70mx", "6gb");

//mandamos a llamar todos los metodos para que realice las acciones que queremos
celular1.botonEncender();
celular1.reiniciar();
celular1.brabarVideo();
celular1.tomarFoto();

//LLmaamamos los objetos con el metodo para mostrar la data la info
celular1.infoCel();
celular2.infoCel();
celular3.infoCel();

//Creamos otra clase "celAltaGama" donde con la palabra "extends" heredamos la clase padre "Celulares"
class celAltaGama extends Celulares {
    constructor(color, dimencion, resolucion, camara, ram, cam) {
//La palabra reservada "super" es para mandar a llamar y reutilizar los atributos de la clase "Celulares" 
        super(color, dimencion, resolucion, camara, ram);
/**Tambien podemos agragar nuevos atributos a la clase */
        this.camEx = cam;
    }
    // metodo para grabar video
    grabandoVideo() {
        alert("Estas rgabando video: celular de alta ganama");
    }
    // metodo para el reconiciminto facila
    reconocimintoFacial() {
        alert("Ejecutando reconociminto facial: celular alta gama ");
    }
    //Agregamos otro metodo para mostrar la data, el cual lleva dentro el otro metodo "infoCel"
    infoaltaGama() {
        this.infoCel() + document.write(`Resulucion de camara extra: <b>${this.camEx}</b><br><br>`)
    }
}

//creamos dos nuevos objetos de la clase "celAltaGama" y le damos sus atributos
const cel1 = new celAltaGama("Negro", "5.5'", "Full HD", "30mpx", "3gb", "superFull HD");
const cel2 = new celAltaGama("Rojo", "6'", "hd", "10mpx", "5gb", "Full HD");

cel1.grabandoVideo();
cel1.reconocimintoFacial();

cel1.infoaltaGama();
cel2.infoaltaGama();
