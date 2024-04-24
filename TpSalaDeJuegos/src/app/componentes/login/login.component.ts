import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  exito!:boolean;

  login():void{
    this.goTo("home");
  }

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
