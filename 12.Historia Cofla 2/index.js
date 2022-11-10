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
const alumnos = [];

for (let i = 0; i < cantidad; i++){
    alumnos[i] = [prompt(`Dime el nombre del alumno numero ${i+1}`)]
}

const lista = (nombre, presente)=>{
    let asistencia = prompt(nombre);
    if (asistencia == "p" || asistencia == "P"){
        alumnos[i][1]++;
    }
}