// Array normal y comun
document.write("<h2>Array comun con salto de linea</h2>");
var pc1 = ["nombre", "RAM", "Procesador", "almacenaminto"];
// Imprimimos cada pososicion del array por separado con salto de linea
document.write(pc1[0] + `<br>`);
document.write(pc1[1] + `<br>`);
document.write(pc1[2] + `<br>`);
document.write(pc1[3] + `<br>`);

document.write(`<h2>Array completo asi como va</h2>`);
// o podemos imprimir el array compleeto
document.write(pc1);

// Array Asosiativos, estos asocian un nombre a las pociciones
// y despues de los dos puntos se pone el contenido que va en esa posicion.
document.write("<h2> Array Asociativos</h2>");
let pc2 = {
    nombre: "Emma pc",
    procesador: "core i7",
    Ram: "12GB",
    Almacenamiento: "250GB",
};

// Impresion del array Asociativo
// El nombre asociado a la posicion se debe de poner entre Comillas
document.write(`El nombre de mi PC : <b>${pc2["nombre"]}</b><br>
                Tiene un Procesador: <b>${pc2["procesador"]}</b><br>
                        Memoria RAM: <b>${pc2["Ram"]}</b><br>
                    Almacenamintoo: <b>${pc2["Almacenamiento"]}</b>`);
