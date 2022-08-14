let num1 = 34;
// let: declaramos variables locales
var num2 = 67;
// var: decalramos variables Globales
resultado = 0;
// si no ponemos el tipo de variable al declararla, automaticamente se pondra Global.
const num3 = 0;
/*const: la variable no podra cambiar su valor una vez que la declaremos, esto se usa
    regularmente para valores constantes qeu no nesecotemos que cambien a lo largo del programa
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
Declara un nombre de constante de solo lectura y ámbito de bloque. esto quiere decir que 
desoues de declarada nunca mas se puede modificar su valor, estas se ocupan regularmente con valores
fijos por ejemplo: PI 3.1416*/

/* El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados.
    Si una variable u otra expresión no está "en el Scope- alcance actual", entonces no está disponible para su uso.*/

/*Una variable declarada usando la instrucción var o let sin un valor asignado especificado
tiene el valor de undefined.*/
