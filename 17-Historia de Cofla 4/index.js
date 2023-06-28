let operacion = prompt(`Que operacion deseas realizar: 
                        1.- Suma 
                        2.- Resta
                        3.- Multiplicacion
                        4.- Division`);
let num1 = prompt('Ingresa el primer numero.')
let num2 = prompt('Ingresa el segundo numero.')
let resultado;

const suma = (num1, num2)=>{
    resultado = num1 + num2;
    return resultado;
}


