import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [Validators.required]);

  error: string = '';

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Debe introducir un correo';
    }

    return this.email.hasError('pattern') ? 'Correo no válido' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'Debe introducir una contraseña';
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const email = this.email.value!;
    const password = this.password.value!;

    this.authService.login(email, password).subscribe((response) => {
      if (this.authService.isLogedIn()) {
        
        const navigationExtras: NavigationExtras = {
          state: {
            idCliente: response.id,
            nombre: response.name,
            apellido: response.apellido,
          },
        };

        this.router.navigate(['products'], navigationExtras);
      } else {
        this.authService.logout();
        this.error = 'Nombre de usuario o contraseña incorrectos';
      }
    });
  }
}