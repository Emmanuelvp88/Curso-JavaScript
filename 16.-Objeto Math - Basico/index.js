// --------------Objeto MATH--------------
let resultado;
document.write(`<b>Math.sqrt:</b> Nos mustra la raiz cuadrada de un numero. raiz cuadrada de 25 = <b>${resultado = Math.sqrt(25)}</b><br>`);
document.write(`<b>Math.cbrt:</b> Nos muestra la raiz cubica de un numero. Raiz cubica de 35 = ${resultado = Math.cbrt(35)}<br>`);
document.write(`<b>Math.max:</b> Nos devuelde el numero mayor, y solo recibe puros numeros. El numero mayor (3,34,54,67,12,2342) = ${resultado = Math.max(3,34,54,67,12,342)}<br>`);
document.write(`<b>Math.min:</b> Nos devuelde el numero menor, y solo recibe puros numeros. El numero menor (3,34,54,67,12,2342) = ${resultado = Math.min(3,34,54,67,12,342)}<br>`);
document.write(`<b>Matah.random:</b> Nos da un numero aleatoria del entre el 0 y 1.  Nmeros random entre 1 y 100 = ${resultado = Math.random() * 100}`);