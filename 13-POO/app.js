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
        }else{
            alert("App no pude iniciar porque no esta instalada");
        }
    }
    cerrarApp(){
        if(this.appIniciada == true & this.appInstalada == true){
            alert("cerrando app...");
        }else{
            alert("La app no puede ser cerrada, porque no esta iniciada o no esta instalada");
        }
    }
    desistalar(){
        if(this.appInstalada == true){
            alert("la app se esta desistalando...");
            this.appInstalada = false;
        }else{
            alert("la app no pusde ser desistalada porque no esta instalada");
        }
    }
    infoApp(){
        return ` 
            Numero de descargas: <b>${this.descargas}</b><br>
            Calificacion: <b>${this.puntuacion}</b><br>
            Pesa: <b>${this.peso}</b><br><br>
        `
    }
}



var app1 = new App("24", "5 estrellas", "34mb");
// app1.instalar();
// app1.iniciarApp();

document.write(app1.infoApp());



