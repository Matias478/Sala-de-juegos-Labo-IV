import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {
  
  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
