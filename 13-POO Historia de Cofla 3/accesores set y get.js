class Auto{
    constructor(color,marca,velocidades,motor){
        this.color = color;
        this.marca = marca;
        this.velocidades = velocidades;
        this.motor = motor;
    }
    
    
    mostrarInfo(){
        document.write(`El auto color ${this.color} de marca ${this.marca} tiene ${this.velocidades} con un motor ${this.motor} <br>`);
    }
    set setColor(newColor){
        this.color = newColor;
    }

}

const ferrari = new Auto("rojo","ferrrari","6v","6.0");
// Antes del "setter" mostramos la info y el color es rjo ugual como la del parametro
ferrari.mostrarInfo();
ferrari.setColor = "verde";
// Despues del "setter" mostramos nuevamente la info y el valos del color cambio a verde 
ferrari.mostrarInfo();
