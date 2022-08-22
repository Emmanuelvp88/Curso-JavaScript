let num1 = 0, num2 = 0, resultado = 0;
let operacion = 0;
alert('Hola como estas, vamos a realizar unas operaciones con los datos que ingreses.');
num1 = prompt("ingresa tu primer numero.");
num2 = prompt("ingresa tu segundo numero.");

operacion = prompt(`Ahora dime que operacion deseas realizar.? seleciona el numero de la operacion.
	1.- Suma
	2.- resta
	3.- multiplicacion
	4.- Divicion
	5.- resto
	6.- Exponencializacion`);

num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = parseInt(resultado);
operacion = parseInt(operacion);


if (operacion == 1) {
    alert(`el resultado de la suma es: ${num1 += num2}`);
} else if (operacion == 2) {
    alert(`el resultado de la resta es: ${num1 -= num2}`);
} else if (operacion == 3) {
    alert(`el resultado de la multiplicacion es: ${num1 *= num2}`);
} else if (operacion == 4) {
    alert(`el resultado de la divicion es: ${num1 /= num2}`);
} else if (operacion == 5) {
    alert(`el resultado del resto es: ${num1 %= num2}`);
} else if (operacion == 6) {
    alert(`el resultado del exponente es: ${num1 **= num2 }`);
} else {
    alert("La operacion seleccionada no existe, favor de seleccionar otra operacion. ");
}
