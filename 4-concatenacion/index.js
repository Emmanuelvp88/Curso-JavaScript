let cadena1 = "Hola como estas"
let cadena2 = " que andas haceindo?"
alert(cadena1 + cadena2);
//Concatenamos las cadenas de caracteres de  manera comun con el operador "+".


let num1 = 4;
let num2 = 5;
alert("el resultado de tu suma es: " +  (num1 + num2));
/*Pero si queremos concatenar cadenas con numeros que realizan una suma, debemos encerar
entre parentesis la operacion para que el programa le ponga pioridad y realize priemero
la operacion y despues concatene el resultado con la cadena de texto */
alert("el resultado es: " + num1 + num2);
// De lo cuntrario los numeros se concatenan todos como una cadena de caracteres.

alert("" + num1 + num2);
//seria lo mismo como si forzaramos a los numeros en que se convirtieran en cadenas de caracteres.

alert(cadena1.concat(num1));
/*con el metodo "concat" podemos concatenar una variable de tipo cadena y dentro del metodo poner 
na de otro tipo, esta manera de concatenar es la manera menos usada.*/

alert(`backtiks esta es la manera mas adecuada
	de concatenar numeros: ${num1} y cadenas: ${cadena1}`);
/*con "backtiks" o acento grave o fuerte, las variables van entre ${} el signo de pesos y llaves,y el texto va suelto.
con esto tambien podemos dar salto de linea y seguir caoncatenando variables, cabe mencionar qeu esta es la manera mas
adecuada para concatenar todo tipo devariables.*/


/*ESCAPE DE COMILLAS DOBLES Y SIMPLES 
El "escape de comillas simples y dobles" se refiere a que cuando estamos declarando una cadena de texto netre comilllas dobles
y en una oracion dentro del texto lo queremos encerrar entre comillas dobles no se va poder ya que la declaracion de la cedena
se cerraria donde el programa detecte las siguientes comillas dobles y viseversa con las comillas simple, en pocas palablras si 
queremos poner comillas dobles por dentro tenemos que poner comillas simples por fuera y si queremos poner comillas simples por dentro
tenemos que poner comillas dobles por fuera.
por eso se recominda encerrrlas entre comillas simples o entre backtiks, ya que con esto si podemos incluir comillas dobles entre
el texto que estamos declarando.
*/