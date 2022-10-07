
document.write(`<h2>Bucles For "Bucles Finitos"</h2>`);

/*El sencillo "for" es literalmente igual que en JAVA*/
document.write(`<h3> Bucle 'for' simple</h3>`);
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
let fauna = ["perro", "gato", "dinosaurio"];
for (animales in fauna) {
    document.write(animales + `<br>`);
}

document.write(`<h3>Bucle 'for of'</h3>`);

for (animales of fauna) {
    document.write(animales + `<br>`);
}

//Sucecion Fibonaci
document.write(`<h3>Sucecion Fibonaci</h3>`);
let a = 0;
let c = 0;
let b = 1;
for(let i = 0; i<=10; i++){
    c = a+b;
    a =+ b;
    b =+ c;
    document.write(a + ",");
};
