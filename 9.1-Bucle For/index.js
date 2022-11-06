document.write(`<h2>Bucles For "Bucles Finitos"</h2>`);

document.write(`<h3> Bucle 'for' simple</h3>`);
/*El "for" sencillo es literalmente igual que en JAVA*/
for (let i = 0; i <= 10; i++) {
    document.write(`El valor actual de "i" es: ${i} <br>`);
}
document.write(` <h3>El ciclo a terminado la condicion ya no se cumplio</h3>`);

document.write(`<h3> Bucle 'for' con 'continue'</h3>`);
for (let i = 0; i <= 15; i++) {
    /*En el siguiente 'if' implementamos la funcion 'Continue' lo que hace es brincar el numero
    o cualquier cosa que querramos que no se muestre, se la brinca y continua con el ciclo
    en este caso saltamos el numero 13*/
    if (i == 13) {
        continue;
    }
    document.write(`El valor actual de "i" es: ${i} <br>`);
}

document.write(`<h3>Bucle 'for in'</h3>`);
//for in lo que hace es recorer los arrays mostrando las posiciones en forma de numeros.
let fauna = ["perro", "gato", "dinosaurio"];
for (let animales in fauna) {
    //Mostramos el contenido mediante la variable "animales" que contiene las posiciones en forma de numero.
    document.write(animales + `<br>`);
}

document.write(`<h3>Bucle 'for of'</h3>`);
// el for of recorre el array mostrando el contenido como tal de cada posicion del array.
// almacenando sus datos en la variable "animales"
for (let animales of fauna) {
    //mostramos la variable "animales" que contiene los datos de las posiciones del array.
    document.write(animales + `<br>`);
}

//Sucecion Fibonaci
document.write(`<h3>Sucecion Fibonaci</h3>`);

let a = 0,
    b = 1,
    c = 0;

for (let i = 0; i <= 10; i++) {
    document.write(a + ",");
    c = a + b;
    a = b;
    b = c;
}
