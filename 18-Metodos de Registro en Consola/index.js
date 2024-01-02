document.write(`
<h3 style = "font-size: 2em; color: blue; text-align: center" >Metodoos de registor en Consola</h3>

- console.assert() -: aparece un mensaje de error en la consola si la afirmacion es falsa. si la afirmacion es verdadera, no aparecera nada. (NO ESTANDAR)<br>
- console.clear() -: Limpia la consola. <br>
- console.error() -: muestra un error en la consola web. <br>
- console.info() -: Emite un mensaje de informacion a la consola web. en firefox y crome se muestra un pequeño icono "i" justo a estos elementos en el registro de la consola web.<br>
- console.log -: Muestra un mensaje en la consola web (o del interpetre de javaScript)<br>
- console.table() -: Esta funcion tome un argumento oblgatorio: data, que debe ser un array o un obejto, y un parametro adicional: columns y nos mueste una tabla en consola <br>
- console.warn() -: imprime un mensaje de advertencia en la consola: <br>
- console.dir -: Despliega una lista iteractiva de las propiedades del objeto  javascript espesificado. [NO ESTANDAR]<br>`);

document.write(
    `<h3 style = "font-size: 2em; color: blue; text-align: center"> Funciones de conteo</h3><br>
    - console.count() -: Registra el numero de veces en la que se ejecuta la misma, osea cuenta las veces
    en la que se ejecuta console.count();  si al agregamos dentro de una funcion por ende contara las veces en las que se ejecuta tal funcion.<br>
    - console.countReset() -:  Resetea el contador que lleva el console.conunt()`);

document.write(`<h3 style = " font-size: 2em; color: blue; text-align: center; ">Funciones de Agrupacion</h3>
- console.group() -: Crea un grupo en linea en el registro de la consola y lo mustra desplegado .<br>
- console.groupCollapsed() -: Crea un grupo en la linea pero contraido, el usuario debe de expandirlo para verlo.<br>;
- console.grouoEnd() -: Remueve un grupo en linea en el registro de la consola web. <br>`);

document.write(
    `<h3 style = "font-size: 2em; color: blue; text-align: center">Funciones de Temporizacion</h3><br>
- console.time() -: Inicia un temporizador. <br>
- console.timeEnd() -: Rgistra el valor actual de un temporizador. <br>
- console.timeLog() -: Detiene el temporizador. <br>`);