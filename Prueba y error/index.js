let operacion = prompt(`Hola Bienvenido a la calculadora de Emmanuel, Dime que operacion deseas realizar
                1.- suma
                2.- Resta
                3.- divicion 
                4.- Multiplicacion`);

let numero1 = prompt("dame el valor del primer numero: ");
let numero2 = prompt("Dame el valos del segundo valor:");
let resultado = 0;
/**parseamos lso numeros ingresados pro el usuario para convertirlos en enteros ya que recordemos 
 * que los datos que se obtienen de un "prompt" sondatos de tipo "String"
 */
numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
const suma = () =>{
    return  resultado = numero1 + numero2;
}
const resta = ()=>{
    return resultado = numero1 - numero2;
}
const divicion = () =>{
    return resultado = numero1 % numero2;
}
const multiplicacion = () =>{
    return resultado = numero1 * numero2;
}
if (operacion == 1){
    document.write(`El resultado de tu suma es: ${suma()}`);
}else if(operacion == 2){
    document.write(`El resultado de tu resta es: ${resta()}`);
}else if (operacion == 3){
    document.write(`el resultado de tu divicon es: ${divicion()}`);
}else if(operacion == 4){
    document.write(`El resusltado de tu multiplicacion es: ${multiplicacion()}`);
}