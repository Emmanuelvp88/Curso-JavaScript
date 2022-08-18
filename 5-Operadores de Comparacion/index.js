alert(`VAMOS AVER TODOS LOS OPERADORES DE COMPARACION
        1 ==  : igual que.
        2 === : Estrictamente igual que.
        3 !=  : Diferente de.`);

let num1 = prompt('ingresa primer dato.');
let num2 = prompt('ingrasa segundo dato.');

alert('OPERADOR: ==');
alert(`Ahora compararemos si el primer dato es igual que el segundo, primer dato: ${num1},-segundo dato: ${num2}  
Resultado de la Lacomparacion es: ${num1 == num2}`);
// Con ==: hacemos una comparacion simple, preguntamos si un dato es igual que el otro,
// sin importar el tipo de dato, si es igual saldra true y sino false. 

alert('OPERADOR: ===');
alert(`Ahora compararemos si el primer dato es igual que el segundo, primer dato es: ${num1} ,-segundo dato es: ${num2}  
Resultado de la Lacomparacion es: ${num1 == num2} `);
// Con ===: hacemos una comparacion muy estricta, Esto quiere decir que los datos deben de ser tanto en cantidad y tipo 
// estrictamente iguale, de lo contrario el resultado sera false.
