alert("Vamos a simular un inicio de sesion.");
let name = prompt(`ingresa tu nombre: `);
let password = prompt(`Ingresa tu contraseña: `);

// NOTA: Esta comparacion si distinge mayusculas de minusculas.
if (name == "Emmanuel" && password == "JavaScript") {
    alert("Inicio de secion Correcta.");
} else {
    alert("nombre o contraseña incorrecta.");
}
/* Las condicionales se basan en valores boleanos para poder actuar,
si en la condicion no tenemos al final true, se brincara y se pasara directamente
a la siginte condicion si es que la hay o ejecutara el else, sino se pasara a la siguinte instruccion
(linea de codigo) y seguira ejecuntando el programa.*/

