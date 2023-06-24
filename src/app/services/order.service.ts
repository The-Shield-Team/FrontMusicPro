import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { CartItemDTO } from '../interfaces/cart-item-dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = 'http://127.0.0.1:8000/api/order';
  private randomShippingURL = 'http://127.0.0.1:8000/api/random_shipping_price';

  private orderDetails: CartItemDTO[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  sendOrderDetails(paymentData: any) {

    let response = {
      'payment_method': paymentData.paymentMethod,
      'auth_code': paymentData.paymentId,
      'price': 1,
      'details': [] as CartItemDTO[],
    }

    console.log(response);

    this.orderDetails = [];

    this.cartService.getCart().subscribe((items) => {
      items.forEach((item) => {
        const newOrderDetail: CartItemDTO = {
          product: item.id,
          quantity: item.quantity,
          store: 1,
        };
        this.orderDetails.push(newOrderDetail);
      });

      //Agregar precio total
      this.cartService.getTotalAmount().subscribe((total) => {
        response.price = total;
      });
    });


    //Agregar detalles de la orden al body de la petición
    response.details = this.orderDetails;
    console.log(response);

    return this.http.post<any>(this.orderUrl, response);
  }

}