// let operacion = prompt(`Que operacion deseas realizar:
//                         1.- Suma
//                         2.- Resta
//                         3.- Multiplicacion
//                         4.- Division`);
// let num1 = prompt("Ingresa el primer numero.");
// let num2 = prompt("Ingresa el segundo numero.");
// let resultado;
// num1 = parseInt(num1);
// num2 = parseInt(num2);

// const suma = (num1, num2) => {
//     return (resultado = num1 + num2);
// };
// const resta = () => {
//     return (resultado = num1 - num2);
// };
// const multiplicacion = () => {
//     return (resultado = num1 * num2);
// };
// const divicion = () => {
//     return (resultado = num1 / num2);
// };

// if (operacion == 1) {
//     alert(`El resultado de tu suma es: ${suma(num1, num2)}`);
// } else if (operacion == 2) {
//     alert(`El resultado de tu resta es: ${resta(num1, num2)}`);
// } else if (operacion == 3) {
//     alert(`El resultado de tu multiplicacion es: ${multiplicacion(num1, num2)}`);
// } else if (operacion == 4) {
//     alert(`El resultado de tu divicion es: ${divicion(num1, num2)}`);
// } else {
//     alert(`Operacion no valida.`);
// }

const obtenerInfo = (materia) => {
    materias = {
        fisica: ["Perez", "Emmanuel", "Juan", "Pedro", "Raquel", "Luis"],
        quimica: ["Vilallva", "Emmauel", "Luis", "Emmi"],
        Programacion: ["Rodriguez", "Josa", "Pedro", "Juan"],
    };
    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } else {
        return false;
    }
};

const mostrarInfo = (materia) => {
    let info = obtenerInfo(materia);
    if (info !== false) {
        let profesor = info[0].shift();
        let alumnos = info[0];
        let materia = info[1];
        document.write(
            ` El profesor  de <b style = 'color: yellow'>${materia}</b> es:<b>${profesor}</b><br>
            Los alumnos presentes en clase son: <b style = 'color: blue'>${alumnos}</b>`
        );
    }
};
mostrarInfo("fisica");
