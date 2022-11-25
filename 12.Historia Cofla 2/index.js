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


let cantidad = prompt(`Cuantos alumnos son?`);
const alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`Dime el nombre del alumno numero ` + (i+1)), 0]
}

const tomarAsistencia = (nombre, p)=>{
    let asistencia = prompt(`Escribe "p" si el alumno ${nombre} estubo presente el dia ${i+1}`);
    if (asistencia == "p" || asistencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for(i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado  = `${alumnosTotales[alumno][0]}: <br>
    Presentes: ${alumnosTotales[alumno][1]}<br>
    Ausentes: ${30 - alumnosTotales[alumno][1]}
    `;
    if (30 - alumnosTotales[alumno][1] < 18){
        document.write(`Estas reprobado por faltas`);
    }else{
        document.write(`Èstas aprobado`);
    }
}
document.write(resultado);