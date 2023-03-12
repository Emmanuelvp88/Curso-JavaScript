class Animal{
    constructor(tipo, color, edad, raza){
        this.tipo = tipo;
        this.color = color;
        this.edad = edad;
        this.raza = raza;
    }
    /**Metodo "info" es una funcion dentro de la clase padre, solo con el echo de estar dentro 
     * de una clase se le denomina "metodo"y sirve para mostras todos los "atributos" del cosntructor */
    info(){
        document.write(`El ${this.tipo} es de color ${this.color}  tiene ${this.edad} y es de la raza ${this.raza} <br>`);
    }
/**El modificador de acceso "static" es para que podamos acceder al elemento que lo tenga
 * sin necedidad de haber creado un objeto para poder acceder a el*/
    static tamaño(){
        document.write('seleccionando la "clasepadre.elementosatic" podemos acceder al elemento sin necesidad de un objeto <br>');
    }
}
/** de esta manera accedemos al elemento con el modificador de acceso "Static" */
Animal.tamaño();

/**Objetos creados */
const perro = new Animal("perro", "gris", "5años", "pitbull");
const gato = new Animal("gato", "amarillo", 2, "de la calle");

perro.info();
gato.info();