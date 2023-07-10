import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);
  private cartQuantity$ = new BehaviorSubject<number>(0);

  getCart() {
    return this.items$.asObservable();
  }

  isInCart(id: number): boolean {
    return Boolean(this.items$.getValue().find((item) => item.id === id));
  }

  addToCart(newItem: CartItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
    this.cartQuantity$.next(this.cartQuantity$.getValue() + 1);
  }

  resetAndAdd(newItem: CartItem) {
    this.items$.next([newItem]);
    this.cartQuantity$.next(1);
  }

  removeItem(id: number) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
    this.cartQuantity$.next(this.cartQuantity$.getValue() - 1);
  }

  removeProduct(id: number) {

    //Get the quantity of the product to remove
    const quantity = this.items$.getValue().find((item) => item.id === id)?.quantity || 0;

    this.cartQuantity$.next(this.cartQuantity$.getValue() - quantity);
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
  }

  changeQty(quantity: number, id: number) {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity += quantity;
    this.items$.next(items);
    this.cartQuantity$.next(this.cartQuantity$.getValue() + quantity);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });

        return total;
      })
    );
  }

  getTotalQuantity() {
    return this.cartQuantity$;
  }

  clearCart() {
    this.items$.next([]);
    this.cartQuantity$.next(0);
  }
}
