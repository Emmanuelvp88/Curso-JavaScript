//Pop
document.write("<b>pop: </b> quita el ultimo elemento de un array y lo almacena en una variable <br>");
let array = ["jorge ", " pedro ", " juan"]
document.write(`Array normalmente: <b>${array}</b> <br>`);
array.pop();
document.write(`Array despues del metodo "pop": <b> ${array}</b> <br>`);
let ultimoElemento = array.pop();
document.write(`Mostramos el ultimo elemeto del array asignandolo a una variable: <b>${ultimoElemento}</b><br>`);
document.write(`Mostraremos como quedo el array al final de todo: <b>${array}</b>`)
//Recordemos que el metodo "pop" va quitando el ultimo elemento del array como actualmente esta
//Es por eso que al final de todo el array solo nos quedo con un solo elemento

document.write(``);