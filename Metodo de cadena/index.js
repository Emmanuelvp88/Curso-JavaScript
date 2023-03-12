let cantidad = prompt("Hola dime cuantos alumnos son?");
const alumnosTotales = [];
// Guardando el nombr de los alumnos
for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt(`Dame el nombre del alumno numero ${i + 1}`), 0]
}

const tomarAsistencia = (nombre, p) => {
    let asistencia = prompt(`Pon "p" si el alumno ${nombre} estubo presente el dia ${i + 1}`);
    if(asistencia == "p" || asistencia == "P"){
        alumnosTotales[p][1]++;
    }
}


