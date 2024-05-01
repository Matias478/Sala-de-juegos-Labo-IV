import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MiUsuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  exito!:boolean;
  loginActivado:any;

  authService = inject(AuthService);
  usuario:MiUsuario=new MiUsuario("","","");

  mensajeError:string | null=null;
  signUp():void{
    this.authService.register(this.usuario.nombre,this.usuario.email,this.usuario.clave)
    .subscribe({
      next: () => {
      this.goTo("home");
      this.guardarRegister();
    },
    error: (err) =>{
      this.mensajeError = err.code;
    },
  })
  }

  guardarRegister(){
    this.loginActivado=true;
    const flagLogin = JSON.stringify(this.loginActivado);
    localStorage.setItem("FlagLogin", flagLogin);
    const userRegistrado = JSON.stringify(this.usuario);
    localStorage.setItem("userRegistrado", userRegistrado);
  }
  
  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
