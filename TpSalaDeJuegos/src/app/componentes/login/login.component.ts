import { CommonModule } from '@angular/common';
import { Component, Injector, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MiUsuario } from '../../clases/usuario';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:MiUsuario=new MiUsuario("","","");
  exito!:boolean;
  loginActivado:any;
  authService = inject(AuthService);

  mensajeError:string | null=null;
  login():void{
    this.authService.login(this.usuario.email,this.usuario.clave)
    .subscribe({
      next: () => {
        this.goTo("home");
        this.guardarLogin();
    },
    error: (err) =>{
      this.mensajeError = err.code;
    },
  });
  }

  rellenarValores(){
    this.usuario.email="dani123@gmail.com";
    this.usuario.clave="tito123";
  }

  guardarLogin(){
    this.loginActivado=true;
    const flagLogin = JSON.stringify(this.loginActivado);
    localStorage.setItem("FlagLogin", flagLogin);
    const userLogueado = JSON.stringify(this.usuario);
    localStorage.setItem("userLogueado", userLogueado);
  }
  
  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
