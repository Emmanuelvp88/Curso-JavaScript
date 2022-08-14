let num1 = 34;
// let: declaramos variables locales
var num2 = 67;
// var: decalramos variables Globales
resultado = 0;
// si no ponemos el tipo de variable al declararla, automaticamente se pondra Global.
const num3 = 0;
/*const: esta se decalra solo una vez esto quiere decir que no podra cambiar su valor una vez que sea declarada,
esto se usa regularmente para valores constantes qeu no nesecotemos que cambien a lo largo del programa
como seria PI 3.1416 y valores parecidos*/

resultado = num1 + num2;
document.write("El resultado de tu suma es:", resultado);

/*
JavaScript tiene tres tipos de declaraciones de variables.
*var*
    Declara una variable, opcionalmente la inicia a un valor, y es de ambito global
    eso quiere decir que tiene acceso a todo el SCOPE.
*let*
    Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
*const*
    const: es una variable constante de solo lectura y ámbito de bloque. esto quiere decir que 
    despues de ser declarada nunca mas se puede modificar su valor, estas se ocupan regularmente con valores
    fijos por ejemplo: PI 3.1416*/
/*
El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados.
    scope: Si una variable u otra expresión no está en el "Scope"  que significadentrode su alcance actual,
    entonces no está disponible para su uso.
    undefined: es Una variable declarada sin un valor asignado especificado
    tiene el valor de undefined, osea no inicializada.
    esto quiere decir que si existe en el programa pero que no se puede utilizar por que no tiene nada adentro
    null: esat declarada e inicializada pero con un valor "nulo", oasea que hacemos que no tenga nada adentro intencionalmente
    NaN: not a number "no es un numero", esto pasa regularmete cuando tratamos de hacer una operacion de variables con tipos de datos
    de tipos de datos distintos, por ejemplo: tratar de multiplicar un String con un entero.*/
    