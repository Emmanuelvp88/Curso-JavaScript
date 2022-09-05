// Array normal y comun
document.write("<h2>Array comun</h2>");
var pc1 = ["nombre", "RAM", "Procesador", "almacenaminto"];
// Imprimimos cada pososicion del array con salto de linea
document.write(pc1[0] + `<br>`);
document.write(pc1[1] + `<br>`);
document.write(pc1[2] + `<br>`);
document.write(pc1[3] + `<br>`);

// o podemos imprimir el array compleeto
document.write(pc1);

// Array Asosiativos
document.write("<h2> Array Asociativos</h2>");
let pc2 = {
    nombre: "Emma pc",
    procesador: "core i7",
    Ram: "12GB",
    Almacenamiento: "250GB",
};

// Impresion del array Asociativo
// El nombre asociativo para la posicion se debe de poner entre Comillas
document.write(`El nombre de mi PC : <b>${pc2["nombre"]}</b><br>
                Tiene un Procesador: <b>${pc2["procesador"]}</b><br>
                        Memoria RAM: <b>${pc2["Ram"]}</b><br>
                    Almacenamintoo: <b>${pc2["Almacenamiento"]}</b>`);
