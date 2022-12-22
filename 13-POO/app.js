class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.appIniciada = false;
        this.appInstalada = false;
    }
    instalar(){
        this.appInstalada = true;
        if(this.appInstalada == true){
            alert("la app esta instalandose...");
        }
    };
    desistalar(){
        if(this.appInstalada == true){
            alert("la app se esta desistalando...");
            this.appInstalada = false;
        }
    };
    iniciarApp(){
        if(this.appIniciada == false & this.appInstalada == true){
            alert("app se esta iniciando...");
        }
    };



}