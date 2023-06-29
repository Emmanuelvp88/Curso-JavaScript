let operacion = prompt(`Que operacion deseas realizar: 
                        1.- Suma 
                        2.- Resta
                        3.- Multiplicacion
                        4.- Division`);
let num1 = prompt('Ingresa el primer numero.')
let num2 = prompt('Ingresa el segundo numero.')
let resultado;
num1 = parseInt(num1)
num2 = parseInt(num2)

const suma = (num1, num2)=>{
    return resultado = num1 + num2;
}
const resta = ()=>{
    return resultado = num1 - num2 ;
}
const multiplicacion = ()=>{
    return resultado = num1 * num2;
}
const divicion = ()=>{
    return resultado = num1 / num2;
}

if (operacion == 1){
    alert(`El resultado de tu suma es: ${suma(num1,num2)}`)
}
else if(operacion == 2){
    alert(`El resultado de tu resta es: ${resta(num1, num2)}`)
}
else if (operacion == 3){
    alert(`El resultado de tu multiplicacion es: ${multiplicacion(num1, num2)}`);
}
else if (operacion == 4){
    alert(`El resultado de tu divicion es: ${divicion(num1, num2)}`);
}
else{
    alert(`Operacion no valida.`);
}