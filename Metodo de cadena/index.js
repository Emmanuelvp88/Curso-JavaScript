cantidad = prompt("Hola cuantos alumnos son?");
alumnosTotales = [];

for(i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`Dame el nombre del alumno numero ${i+1}`), 0];
}
const tomarAsistencia = (nombre, p) =>{
    let presente = prompt(`Escribe "p" si el alumno ${nombre} estubo presente el dia`);
    if (presente == "p" || presente == "P"){
        alumnosTotales[p][1]++;
    }
}
for(i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `El alumno ${alumnosTotales[alumno][0]} tiene: <br>
    Asistencias: ${alumnosTotales[alumno][1]}<br>
    Faltas: ${30 - alumnosTotales[alumno][1]}<br>
    ` 

    if(alumnosTotales[alumno][1] > 18){
        resultado += `Por lo tanto el alumno ${alumnosTotales[alumno][0]} esta <b>Aprobado</b> <br>`
    }else{
        resultado += `Por lo tanto el alumno ${alumnosTotales[alumno][0]} esta <b>Reprobado</b> <br>`
    }
    document.write(resultado);
}