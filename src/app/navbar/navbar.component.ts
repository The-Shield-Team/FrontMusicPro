import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  nombreCliente$: BehaviorSubject<string> = new BehaviorSubject('');
  cartQuantity?: number;

  state?: any;

  isLogedIn = () => this.authService.isLogedIn();

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {
    //Obtener datos del usuario por cookie
    this.nombreCliente$.next(localStorage.getItem('nombre') || '');
  }

  ngOnInit(): void {
    if (this.state) {
      this.nombreCliente$.next(this.state.nombre);
    }

    this.cartService
      .getTotalQuantity()
      .subscribe((number) => (this.cartQuantity = number));
  }
  redireccionar = (url: string) => {
    location.href = url;
  };

  logout() {
    this.authService.logout();
  }
}
