class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.appIniciada = false;
        this.appInstalada = false;
    }
    instalar(){
        if(this.appInstalada == false){
            alert("la app esta instalandose...");
            this.appInstalada = true;
        }
    }
    iniciarApp(){
        if(this.appIniciada == false & this.appInstalada == true){
            alert("app se esta iniciando...");
            this.appIniciada = true;
        }
    }
    cerrarApp(){
        if(this.appIniciada == true & this.appInstalada == true){
            alert("cerrando app...");
        }
    }
    desistalar(){
        if(this.appInstalada == true){
            alert("la app se esta desistalando...");
            this.appInstalada = false;
        }
    }
    infoApp(){
        return ` 
            Numero de descargas: <b>${this.descargas}</b><br>
            Calificacion: <b>${this.puntuacion}</b><br>
            Pesa: <b>${this.peso}</b><br><br>
        `
    };
}

var app1 = new App("24", "5 estrellas", "34mb");

// app1.instalar();
    document.write(app1.infoApp())



