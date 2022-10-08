document.write(`<h2>Funcion Label</h2>`);
var mascotas = ["perro", "gato", "geco", nombreMascotas];
var nombreMascotas = ["walter", "hiena", "pequeña", "junior"];
// document.write(nombreMascotas[0]);
for (let animales in mascotas) {

    if (animales == 3) { // este if entra solo cuando el array mascotas llega a su posicion 3
        // En la variable animales guardamos el contenido de las pocisiones del array nombreMascotas.
        for (let animales of nombreMascotas) {
            //Recorremos el array
                document.write(`${animales} ,`);
        }
    }
    document.write(` ${mascotas[animales]} ,`);
}
