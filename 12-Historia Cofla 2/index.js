//Cadenero de la discoteca, si eres menos de edad no te deja pasar
//Si eres mayor de edad y el primero en llegar despues de las 2am entras gratis
let free = false;
const entrada = (time) => {
    let edad = prompt(`Estas en Discoinfierno, ¿cual es tu edad?`);
    if (edad >= 18) {
        alert(`Bienvenido a la Disco`);
        if (time >= 2 && time <= 7 && free == false) {
            alert(`Eres la primer persona en entrar despues de la 2am, tu entrada es gratis`);
            free = true;
        } else {
            alert(`Solo Paga tu entrada y pasa`);
        }
    } else {
        alert(`Lo siento no puedes pasar, eres menor de edad.`);
    }
};
entrada(1);
entrada(1);
entrada(4);
entrada(4);
entrada(1);
entrada(10);
entrada(11);

//Programa para calificar alumnos mediante sus asistencias
//tomamos la cantidad de alumnos
let cantidad = prompt(`Cuantos alumnos son?`);
const alumnosTotales = [];
//Tomamos los nombres de los alumnos
for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt(`Dime el nombre del alumno numero ` + (i + 1)), 0];
}
//Funcion para tomar asistencia
const tomarAsistencia = (nombre, p) => {
    let asistencia = prompt(`Escribe "p" si el alumno ${nombre} estubo presente el dia ${i + 1}`);
    if (asistencia == "p" || asistencia == "P") {
        alumnosTotales[p][1]++;
    }
};
//Bucle para tomar la asistencia con la funcion (tomarAsistencia) por 30 dias
for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}
//Mostramos los resultados si pasaron o no con respecto a sus asitencias durante 30 dias
for (alumno in alumnosTotales) {
    let resultado = `<b>El alumno:</b> ${alumnosTotales[alumno][0]}: <br>
    <b>Estubo presente:</b> ${alumnosTotales[alumno][1]} dias<br>
    <b>Y ausente:</b> ${30 - alumnosTotales[alumno][1]} dias <br>
    `;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += `<b style = color:red>Lo siento  ${alumnosTotales[alumno][0]} estas reprobado@ por faltas</b><br><br>`;
    } else {
        resultado += `<b style = color:blue>Felicidades ${alumnosTotales[alumno][0]} Èstas aprobado@ </b><br><br>`;
    }
    document.write(resultado);
}

//Calculadora
let operacion = prompt(`Hola, bienvenido a la calculadora de Emmanuel.
        Que poeracion deseas realizar.?
        1.- Suma 
        2.- Resta
        3.- Multiplicacion
        4.- Divicion
        5.- Resto
        6.- Porcentaje`);
var num1 = prompt(`Ingresa tu primer numero`);
var num2 = prompt(`Ingresa tu segundo nnumero`);
let resultado = 0;
/* Parseamos para que los numero obtenidos de los usuarios se trasformen en enteros
ya que recordemos que en los "prompt" solo se obtienen datos del tipo "String"*/
num1 = parseInt(num1);
num2 = parseInt(num2);


/**La verdad no habia necesidad de pasarle parametros a las funciones de igula forma 
 * iva afuncionar por que "num1 y num2" ya estan definidas y parseadas
 */
const suma = (num1, num2) => {
    return resultado = num1 + num2;
};
const resta = (num1, num2) => {
    return resultado = num1 -  num2
};
const multiplicacion = (num1, num2) => {
    return resultado = num1 *  num2
};
const divicion = (num1, num2) => {
    return resultado = num1 /  num2
};
const resto = (num1, num2) => {
    return resultado = num1 %  num2
};
const exponente = (num1, num2) => {
    return resultado = num1 ** num2;
};

if (operacion == 1) {
    alert(`El resultado de tu suma es: ${suma(num1, num2)}`);
} else if (operacion == 2) {
    alert(`Èl resultado de tu resta es: ${resta(num1, num2)}`);
} else if (operacion == 3) {
    alert(`El resutado de tu multiplicacion es: ${multiplicacion(num1, num2)}`);
} else if (operacion == 4) {
    alert(`El resultado de tu dicvicion es: ${divicion(num1, num2)}`);
} else if (operacion == 5) {
    alert(`El resultado de tu resto es: ${resto(num1, num2)}`);
} else if (operacion == 6) {
    alert(`Èl resultado de tu exponencializacion es: ${exponente(num1, num2)}`);
} else {
    alert(`No se encontro nunguna operacion`);
}
