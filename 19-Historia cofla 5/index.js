t materias = {
	    fisica: [89, 8, 3, "fisica"],
	    qumica: [90, 9, 2, "quimica"],
	    matematicas: [84, 6, 4, "matematicas"],
	    logica: [75, 5, 3, "logica"],
	    calculo: [90, 8, 3, "calculo"],
	    programacion: [94, 9, 2, "programacion"],
	    biologia: [83, 6, 4, "biologia"],
	    BDD: [90, 5, 3, "BDD"],
	    algebra: [80, 9, 3, "algebra"],
};
// NOTA: Para agragar estilos en console.log(); debemos agragar %c como se mustra a continuacion.
// const promedio = () => {
//     // Recocoremos el array "materias" con un "for in" 
//         for (indice in materias) {
//                 // metemos cada uno de los datos de array "materias" en variables
//                         let asistencia = materias[indice][0];
//                                 let promedio = materias[indice][1];
//                                         let trabajos = materias[indice][2];
//                                                 let materia = materias[indice][3];
//                                                         // Condicionamos los resultados de los datos para ver si son aprobatorios o no mediante un if
//                                                                 if (asistencia >= 80) {
//                                                                             console.log(materia);
//                                                                                         console.log("%c Assistencias suficientes", "color:green");
//                                                                                                 } else {
//                                                                                                             console.log(`${materia}`);
//                                                                                                                         console.log("%c Asistencias insuficientes", "Color:red");
//                                                                                                                                 }
//                                                                                                                                         if (promedio >= 8) {
//                                                                                                                                                     console.log("%c Promedio suficiente", "color:green");
//                                                                                                                                                             } else {
//                                                                                                                                                                         console.log("%c Promedio Insuficinte", "color:red");
//                                                                                                                                                                                 }
//                                                                                                                                                                                         if (trabajos >= 3) {
//                                                                                                                                                                                                     console.log("%c Trabajos son suficientes", "color: green");
//                                                                                                                                                                                                             } else {
//                                                                                                                                                                                                                         console.log("%c Trabajos son insuficientes", "color: red");
//                                                                                                                                                                                                                                 }
//                                                                                                                                                                                                                                     }
//                                                                                                                                                                                                                                     };
//                                                                                                                                                                                                                                     promedio();
//                                                                                                                                                                                                                                     
