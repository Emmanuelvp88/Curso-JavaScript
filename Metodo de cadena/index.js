let cantidad = prompt("Hola dime cuantos alumnos son?");
const alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
    alumnosTotales [i] = [prompt(`Dame el nombre del alumno numero ${i+1}`), 0]
}