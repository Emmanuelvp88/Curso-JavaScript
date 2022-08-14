let name = prompt("what is your name?");

document.write(`Hola "${name}" tu nombre se concateno con esta cadena de caracteres cuando lo ingresaste con "Prompt"`);

/*window.prompt()indica al navegador que muestre un cuadro de diálogo con un mensaje opcional que solicita
al usuario que ingrese algún texto y que espere hasta que el usuario envíe el texto o cancele el cuadro de diálogo.

En algunas condicisones, por ejemplo, cuando el usuario cambia de pestaña, es posible que el navegador no muestre
un cuadro de diálogo o que no espere a que el usuario envíe el texto o cancele el cuadro de diálogo.*/

/*NOTA: cabe mencionar que lo que se ingrese sera en cadena de texto eso quiere decir que se alojara en una variable
de tipo "string" asi que si se ingresa un numero se tiene que "Parsear" para poder utilizarlo en operaciones aretmeticas*/