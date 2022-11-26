// let free = false;

// const entrada = (time) =>{
//     let edad = prompt(`Bienvenido cual es tu edad`);
//     if(edad >= 18){
//         alert(`Bienvenido`)
//         if(time >= 2 && time<= 7 && free == false){
//             alert(`Eres la primer persona en entrar despues de la 2am, tu entrada es gratis`);
//             free = true;
//         }else{
//             alert(`Paga tu entrada y pasa`);
//         }
//     }else{
//         alert(`lo siento no puedes pasar, eres menor de edad.`)
//     }
// }
// entrada(1);
// entrada(1);
// entrada(4);
// entrada(4);
// entrada(1);
// entrada(10);
// entrada(11);


// let cantidad = prompt(`Cuantos alumnos son?`);
// const alumnosTotales = [];

// for (let i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt(`Dime el nombre del alumno numero ` + (i+1)), 0]
// }

// const tomarAsistencia = (nombre, p)=>{
//     let asistencia = prompt(`Escribe "p" si el alumno ${nombre} estubo presente el dia ${i+1}`);
//     if (asistencia == "p" || asistencia == "P"){
//         alumnosTotales[p][1]++;
//     }
// }

// for(i = 0; i < 30; i++){
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for(alumno in alumnosTotales){
//     let resultado  = `<b>El alumno:</b> ${alumnosTotales[alumno][0]}: <br>
//     <b>Estubo presente:</b> ${alumnosTotales[alumno][1]} dias<br>
//     <b>Y ausente:</b> ${30 - alumnosTotales[alumno][1]} dias <br>
//     `;
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado+= `<b style = color:red>Lo siento  ${alumnosTotales[alumno][0]} estas reprobado@ por faltas</b><br><br>`;
//     }else{
//         resultado+= `<b style = color:blue>Felicidades ${alumnosTotales[alumno][0]} Èstas aprobado@ </b><br><br>`;
//     }
//     document.write(resultado);
// }




let cantidad = prompt(`Cuantos alumnos son?`);
numAlumnos = [];

for(i = 0; i < cantidad; i++){
    numAlumnos[i] = [prompt(`Dame el nombre del alumno nnumero: ` + (i+1)), 0]
}

const asistencias = (nombre, presencia)=>{
    let numAsistencia = prompt(` Escribe "p" si el alumno ${nombre} se presento el dia: ${i+1}`);
    if(numAsistencia == "p" || numAsistencia == "P"){
        numAlumnos[presencia][1]++;
    }
}
for (i = 0; i < 30; i++){
    for(alumno in numAlumnos){
        asistencias(numAlumnos[alumno][0], alumno);
    }
}

for (mostrar in numAlumnos){
    let resultado = `El alumno ${numAlumnos[mostrar][0]}<br>
    Asistio: ${numAlumnos[mostrar][1]} dias<br>
    falto: ${30 - numAlumnos[mostrar][1]} dias<br>
    `;
    if(numAlumnos[mostrar][1] < 18){
        resultado+= numAlumnos[mostrar][0] + ' estas reprobado por faltas<br><br>'
    }else{
        resultado+= numAlumnos[mostrar][0] + ' felicidades has aprobado<br><br>'
    }
    document.write(resultado)
}