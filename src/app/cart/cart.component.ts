import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  //Inicio de atributos

  cartItems$: Observable<CartItem[]> = new Observable<CartItem[]>();
  totalAmount$: Observable<number> = new Observable<number>();
  cartQuantity: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.cartService
      .getTotalQuantity()
      .subscribe((number) => (this.cartQuantity = number));
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) {
      this.cartService.removeItem(item.id);
      return;
    }

    this.cartService.changeQty(-1, item.id);
  }

  goToCheckout() {
    this.router.navigate(['checkout'])
  }
}
