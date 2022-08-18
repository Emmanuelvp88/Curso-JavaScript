let cadena1 = "(Hola) "
let cadena2 = "(como estas)"
let num1 = 4;
let num2 = 5;

alert("Concatenamos dos cadenas: " + cadena1 + cadena2);
//Concatenamos las cadenas de caracteres de  manera comun con el operador "+".
alert("Concatenamos una cadena mas dos numeros. resultado:  " + cadena1 + num1 + ' y '+ num2);
// De lo cuntrario los numeros se concatenan todos como una cadena de caracteres.
alert("Concatenamos una cadena,y los dos numeros anteriores, pero encerrados entre parentesis, Resultado: " + cadena1 +  (num1 + num2));
/*NOTA: si lo queremos es concatenar cadenas con numeros si se puede, pero si los encerramos entre parentesis realizaremos una suma,
porque el programa le pondra pioridad y realizara priemero la operacion y despues concatenara el resultado con la cadena de texto */
alert("Los datos 'int' son forzados a convertirse en texto por concatenarlos con una cadena de texto: " + num1 + ',' + num2);
/*Practicamenter forzaramos a los numeros en que se convirtieran en cadenas de caracteres cuando los conactenamos con string
	ya que elprograma cuando detecta textoen una suma de numero y sumas una cadena, convierte todo a texto en vez de sumar*/
alert("Metodo concat: "+ cadena1.concat(num1 + num2));
/*con el metodo "concat" podemos concatenar una variable de tipo cadena y dentro del metodo poner 
otro tipo de dato, esta manera de concatenar es la manera menos usada.*/
alert(`los backtiks son la manera mas adecuada
	de concatenar numeros y cadenas, por ejemplo:  ${num1} y ${cadena1}`);
/*con "backtiks" o acento grave o fuerte, las variables van entre "${}" el signo de pesos y llaves, el texto va suelto.
la ventaja de esto es que tambien podemos dar salto de linea y seguir caoncatenando variables, cabe mencionar qeu esta es la manera mas
adecuada para concatenar todo tipo devariables.*/

