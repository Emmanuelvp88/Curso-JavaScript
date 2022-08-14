let num1 = 0, num2 = 0, resultado = 0;
let operacion = 0;

num1 = prompt("ingresa tu primer numero.");
num2 = prompt("ingresa tu segundo numero.");

operacion = prompt(`Haora digite la operacion a realizar selecionando el numero de la operacion correspiondiente.
	1.- Suma
	2.- resta
	3.- multiplicacion
	4.- Divicion
	5.- resto
	6.- Exponencializacion`);

num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = parseInt(resultado);


if (operacion == 1) {
	resultado = num1 + num2;
	document.write(`el resultado de la suma es: ${resultado}`);
}
else if(operacion == 2){
	resultado = num1 - num2;
	document.write(`el resultado de la resta es: ${resultado}`);
}
else if(operacion == 3){
	resultado == num1 * num2;
	document.write(`el resultado de la multiplicacion es: ${resultado}`);
}
else if ( operacion == 4) {
	resultado == num1 / num2;
	document.write(`el resultado de la divicion es: ${resultado}`);
}
else if( operacion == 5){s
	resultadoi = num1 % num2;
	document.write(`el resultado del resto es: ${resultado}`);
}
else if (operacion == 6){
	resultado = num1 ** num2;
	document.write(`el resultado del exponente es: ${resultado}`);
}

else{
	document.write("La operacion seleccionada no existe, favor de seleccionar otra operacion. ");
};



