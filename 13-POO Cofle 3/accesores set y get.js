class Auto{
    constructor(color,marca,velocidades,motor){
        this.color = color;
        this.marca = marca;
        this.velocidades = velocidades;
        this.motor = motor;
    }
        mostrar(){
            document.write(`<br>El auto de marca ${this.marca} es de color ${this.color}`);
        }
        set setColor(newColor){
            this.color = newColor;
        }


        acelerar(){

        }

}

const ferrari = new Auto("rojo","ferrrari","6v","6.0");
document.write(ferrari.color);

ferrari.setColor = "verde";
ferrari.mostrar();