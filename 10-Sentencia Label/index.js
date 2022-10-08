document.write(`<h2>Funcion Label</h2>`);
var mascotas = ["perro", "gato", "geco", nombreMascotas];
var nombreMascotas = ["walter", "hiena", "pequeña", "junior"];

misMascotas:// Esta es la label con la  qeu vamos a identificar este "for"
for (let animales in mascotas) {
    if (animales == 3) { // este "if" entra solo cuando el array "mascotas" llega a su posicion 3
        // En la variable "animales" guardamos el contenido de las pocisiones del array "nombreMascotas".
        somos: //Esta es la "label" con la que vamos a identificar este "for"
        for (let animales of nombreMascotas) {
                //Recorremos el array directamente con la variable "animales" ya que en el "for of" alberga el contenido del array.
                if (animales == "hiena"){
                    continue misMascotas; //Con esto Saltamos la iteracion del "for in" completo, por ende todo se detiene cuando aparece la palabra "hiena".
                }
                document.write(`${animales} ,`);
            }
    } else{
        //Recorremos el array con la variable "animales" ya que en el "for in" almacena el numero de las posiciones del array.
        document.write(` ${mascotas[animales]} ,`);
    }
<<<<<<< HEAD
    document.write(` ${mascotas[animales]} ,`);
}
    document.write(`Hola que transita`);
=======
    
}
>>>>>>> working
