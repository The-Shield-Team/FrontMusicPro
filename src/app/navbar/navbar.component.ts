import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  nombreCliente$: BehaviorSubject<string> = new BehaviorSubject('');

  state?: any;

  isLogedIn = () => this.authService.isLogedIn();

  constructor(private authService: AuthService, private router: Router) { 
    //Obtener datos del usuario por cookie
    this.nombreCliente$.next(localStorage.getItem('nombre')||'');
  }

  ngOnInit(): void {
    if (this.state) {
      this.nombreCliente$.next(this.state.nombre);
    }
  }
  redireccionar = (url: string) => {
    location.href = url;
  };

  logout() {
    this.authService.logout();
  }

}
