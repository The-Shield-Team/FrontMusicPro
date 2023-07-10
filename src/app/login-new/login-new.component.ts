import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css'],
})

export class LoginNewComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }

  error: string = '';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    const email = this.email.value!;
    const password = this.password.value!;

    this.authService.login(email, password).subscribe((response) => {
      if (this.authService.isLogedIn()) {
        
        const navigationExtras: NavigationExtras = {
          state: {
            id: response.id,
            nombre: response.nombre,
            apellido: response.apellido,
          },
        };

        localStorage.setItem('nombre', response.nombre);
        localStorage.setItem('apellido', response.apellido);
        localStorage.setItem('id', response.id.toString());

        this.router.navigate([''], navigationExtras);
      } else {
        this.authService.logout();
        this.error = 'Nombre de usuario o contraseña incorrectos';
      }
    });
  }
}
