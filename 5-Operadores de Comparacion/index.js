
let numero1 = 23;
let numero2 = 26;


alert(`VAMOS AVER TODOS LOS OPERADORES DE COMPARACION
        1. ==  : igual que.
        2. === : Estrictamente igual que.
        3. !=  : Diferente de.
        4. !== : Estrictamente dirente de.
        5.  >  : Mayor que.
        6.  <  : Menor que.
        7.  >= : Mayor o igual que.
        7.  <= : Menor o igual que:`);

let num1 = prompt('ingresa primer dato.');
let num2 = prompt('ingrasa segundo dato.');
num1;

alert('OPERADOR: ==');
alert(`Ahora compararemos el primer dato con el segundo dato`)  
alert(`${num1} es igual que ${num2}: ${num1 == num2}`);
// Con ==: hacemos una comparacion simple, preguntamos si un dato es igual que el otro,
// sin importar el tipo de dato, si es igual saldra true y sino false. 

alert('OPERADOR: ===');
alert(`${num1} es estrictamente igual que: ${num2}: ${num1 == num2} `);
// Con ===: hacemos una comparacion muy estricta, Esto quiere decir que los datos deben de ser tanto en cantidad y tipo 
// estrictamente iguale, de lo contrario el resultado sera false.

alert('OPERADOR: !=');
alert(`${num1} es diferente de ${num2}: ${num1 != num2} `);

alert('OPERADOR: !==');
alert(`${num1} es estrictamente diferente de ${num2}: ${num1 !== num2} `);

alert('OPERADOR: >');
alert(`${num1} es mayor que  ${num2}: ${num1 > num2} `);

alert('OPERADOR: <');
alert(`${num1} es menor que  ${num2}: ${num1 < num2} `);

alert('OPERADOR: >=');
alert(`${num1} es mayor o igual que ${num2}: ${num1 >= num2} `);

alert('OPERADOR: <=');
alert(`${num1} es menor o igual que ${num2}: ${num1 <= num2} `);

