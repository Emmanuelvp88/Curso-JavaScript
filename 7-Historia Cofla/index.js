// mandamos un alert donde explicamos que es lo que vamos hacer
alert("Contaremos la historia de cofla y sus amigos.");
alert(`Cofla y sus amigos se quiere comprar un elado del sabor mas caro 
que le alcance con el dinero que tienen.`);
alert(`Precio de los elados:   Elado de pote con ncrema  batida $1.5
                                    Elado "Eladovich" $2.3
                                    Elado "Elardo"    $3.4`);

// Pedimos los datos al usuario 
let dineroCofla = prompt("Cuanto dinero tiene Cofla?");
let dineroPedro = prompt("Cuanto dinero tiene Pedro?");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
var vuelto = 55;

// Condicionales para Cofla, dependiendo el dinero que le allamos dado Es el elado que se podra comprar.
if(dineroCofla >= 1.5 && dineroCofla < 2.3){
    alert(`ese mi Cofla te alcanza para el elado numero 1 " de pote con crema Batida" sobres atascate`);
    if(dineroCofla > 1.5 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroCofla - 1.5));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if (dineroCofla >= 2.3 && dineroCofla < 3.4){
    alert(`Ese mi cofla, Te alcanza para comprarte el "Eladovich" sobres Todo tuyo`);
    if(dineroCofla > 2.3 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroCofla - 2.3));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if(dineroCofla >= 3.4){
    alert(`Ese mi cofla Tienes paltuca, puedes comprarte el mas caro "Elardo" o todos los anteriores Cuajate.`);
    if(dineroCofla > 3.4 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroCofla - 3.4));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
};


// Condicional para Pedro
if(dineroPedro >= 1.5 && dineroPedro < 2.3){
    alert(`ese mi Pedro te alcanza para el elado numero 1 " de pote con crema Batida" sobres atascate`);
    if(dineroPedro > 1.5 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroPedro - 1.5));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if (dineroPedro >= 2.3 && dineroPedro < 3.4){
    alert(`Ese mi Pedro, Te alcanza para comprarte el "Eladovich" sobres Todo tuyo`);
    if(dineroPedro > 2.3 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroPedro - 2.3));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if(dineroPedro >= 3.4){
    alert(`Ese mi Pedro Tienes platuca, puedes comprarte el mas caro "Elardo" o todos los anteriores Cuajate.`);
    if(dineroPedro > 3.4 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroPedro - 3.4));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
};


// Condicional Para Roberto
if(dineroRoberto >= 1.5 && dineroRoberto < 2.3){
    alert(`ese mi Roberto te alcanza para el elado numero 1 " de pote con crema Batida" sobres atascate`);
    if(dineroRoberto > 1.5 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroRoberto - 1.5));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if (dineroRoberto >= 2.3 && dineroRoberto < 3.4){
    alert(`Ese mi Roberto, Te alcanza para comprarte el "Eladovich" sobres Todo tuyo`);
    if(dineroRoberto > 2.3 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroRoberto - 2.3));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
}
else if(dineroRoberto >= 3.4){
    alert(`Ese mi Roberto Tienes paltuca, puedes comprarte el mas caro "Elardo" o todos los anteriores Cuajate.`);
    if(dineroRoberto > 3.4 ){
        alert( `todavia te sobro cambio loco, tu cambio es: ` + (vuelto = dineroRoberto - 3.4));
    }
    else{
        alert("chale no te sobro nada de cambio, que esperas,. ya largate de aqui.");
    };
};

