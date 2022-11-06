document.write(`<h2>Funcion Label</h2>`);
/*El poner un array adentro de otro array es solo para indicar que en esa posicion entrara en accion
un 'if' que contiene un 'for' que recorrera ese Array que esta dentro, no es como que 
el array1 recorrera el array2.*/
var mascotas = ["perro", "gato", "geco", mascotas2, "lagartija", "brincolin"];
var mascotas2 = ["walter", "hiena", "pequeña", "junior", "canela", "Princesa"];

/* La sentencia "Label" es simplemente un nombre con el que podemos etiqeutar un bucle "for" y con ese
nombre poder manipularlo mas facil */

// "misMascotas" es un "label" con la  que podemos identificar este 'for' principal
misMascotas: for (let cachorros in mascotas) {
    if (cachorros == 5) {
        //En este 'if' asemos uso del "label" 'misMascotas' para frenar el 'for' principal.
        break misMascotas;
    }

    if (cachorros == 3) {
        // este "if" entra solo cuando el array "mascotas" llega a su posicion 3
        // En la variable "animales" guardamos el contenido de las pocisiones del array "nombreMascotas".

        //animales es  la "label" con la que vamos a identificar este "for" interno
        animales: for (let perros of mascotas2) {
            //Recorremos el array directamente con la variable "animales" ya que en el "for of" alberga el contenido del array.
            if (perros == "pequeña") {
                continue animales; //Con el "label" 'misMAscotas' Saltamos la iteracion del "for in" el for principal completo.
            }
            document.write(`${perros} ,`);
        }
    } else {
        //Recorremos el array con la variable "animales" ya que en el "for in" solo almacena el numero de las posiciones del array.
        document.write(` ${mascotas[cachorros]} ,`);
    }
};

document.write('<h2>Recorremos un array con un for normal</h2>');
//De esta manera recorremos un 'array' normalmente con un 'for' normal.
for(let i = 0; i < mascotas.length; i++){
    document.write(`${mascotas[i]} ,`);
}