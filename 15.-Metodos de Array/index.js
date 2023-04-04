//Pop
document.write("<b>pop: </b> quita el ultimo elemento de un array y lo almacena en una variable <br>");
let array = ["jorge ", " pedro ", " juan"]
document.write(`Array original: <b>${array}</b> <br>`);
array.pop();
document.write(`Array despues del metodo "pop": <b> ${array}</b> <br>`);
let ultimoElemento = array.pop();
document.write(`Mostramos el ultimo elemeto del array asignandolo a una variable: <b>${ultimoElemento}</b><br>`);
document.write(`Mostraremos como quedo lo que sobro del array al final: <b>${array}</b> <br>`)
//Recordemos que el metodo "pop" va quitando el ultimo elemento del array como actualmente esta
//Es por eso que al final de todo el array solo nos quedo con un solo elemento

document.write(`<b>shift: </b> El lo mismo que "pop" solo que hace lo mismo pero con el elemento del principio.<br>`);
document.write(`<b>push: </b> Este se encarga de agregra un elemento al array al final.<br> `);
document.write(array);
