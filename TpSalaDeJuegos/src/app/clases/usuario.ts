export class MiUsuario{
    nombre!:string;
    email!:string;
    clave!:string;
    
    constructor(nombre:string,email:string,clave:string){
        this.nombre=nombre;
        this.email=email;
        this.clave=clave;
    }
    
    }