document.write("<h1>Estructuras Condicinales While, do while</h1>");
document.write("<h2>Estructura While</h2>");

let numero = 0;

/* While Significa "Mientras", asi que es bucle hace lo que contenga en su cuerpo de su 
    estructura mintras la condicion que estan en los parentesis se cumpla. y son conocidos 
    como estructurasde control infinitas o bucles infinitos*/
document.write(`<h3>Vamos a imprimir la variable "numero" mintras sea menor o igual a 10</h3>`);
while (numero <= 10) {
    document.write(`El valor de la variable numero es: ${numero} <br>`);
    numero++;
};
document.write(`<h3>Termino del Ciclo "While": La condicion ya no se cumplio porque la variable "numero" ya es mayor a  10.</h3>`);


/*La estructura Do while "Hacer mientras" la diferencia principal esque el "do" se ejecuta por lomenos 
una vez en el codigo, sea o no verdadera la condicion, y el "while" tienen que ir forzosamente abajo del "do"*/
document.write(`<h2>Estructura Do While con Break</h2>`);

numero  = 0;
document.write(`<h3>Vamos a imprimir la variable "numero" sea menor o igual a 1000</h3>`);
do{
    document.write(`El valor de la variable numero es: ${numero} <br>`);
    /* Unque la condicion diga que deve parar hasta que la variable"numero" sea menor o igual a "1000"
        la condicional "if" tiene un "break" 'freno' adento, que permite frenar el bucle dandole FIN*/
    if(numero == 10){
        document.write(`<b>El "Break" ya paro  la operacion</b>`);
        break;
    }
    numero++;
}
while (numero <= 1000)
document.write(`<h3>Termino del Ciclo "While": La condicion ya no se cumplio porque la variable "numero" ya es mayor que 10.</h3>`);


