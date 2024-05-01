import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  loginActivado:any;
  userLS:any;
  authService = inject(AuthService);

  resetearLogin(){
    this.loginActivado=false;
    const flagLogin = JSON.stringify(this.loginActivado);
    localStorage.setItem("FlagLogin", flagLogin);
  }

  ngOnInit():void{
    let flagLogin;
    if (this.loginActivado) {
      flagLogin = JSON.stringify(this.loginActivado=false);
      localStorage.setItem("FlagLogin", flagLogin);
    }
    //this.authService.firebaseAuth.currentUser;
    
    if (this.loginActivado) {
    flagLogin = localStorage.getItem("FlagLogin") ?? "";
    this.loginActivado = JSON.parse(flagLogin);
    }

    if(this.userLS!=null){
      const userRegistrado = localStorage.getItem("userRegistrado") ?? "";
      this.userLS = JSON.parse(userRegistrado);
    }
    if(this.userLS!=null){
      const userRegistrado = localStorage.getItem("userRegistrado") ?? "";
      this.userLS = JSON.parse(userRegistrado);
    }
  }

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
