cantidad = prompt("Hola cuantos alumnos son?");
alumnosTotales = [];

for(i = 0; i < cantidad; i++){
    alumnosTotales = [i][prompt(`Dame el nombre del alumno numero ${i+1}`), 0];
}
const tomarAsistencia = (nombre, p) =>{
    presente = prompt(`Escribe "p" si el alumno ${nombre} estubo presente el dia ${alumno+1}`);
    if (presente == "p" || presente == "P"){
        alumnosTotales[p][1]++;
    }
}
for(i = 0; i < 30; i++){
    
}