import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { CartService } from '../services/cart.service';
import { CurrencytransformService } from '../services/currencytransform.service';
import { Router } from '@angular/router';
import {
  ICreateOrderRequest,
  IPayPalConfig,
  NgxPayPalModule,
} from 'ngx-paypal';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //Inicio de atributos

  cartItems$!: Observable<CartItem[]>;
  totalAmount$!: Observable<number>;
  cartQuantity!: number;
  showPaypalButtons = false;

  totalInString = '';

  usdValue = 1;

  paymentMethod = '';
  authCode = '';
  totalPayment = 0;

  public payPalConfig?: IPayPalConfig;
  // public showPaypalButtons = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private toUsd: CurrencytransformService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.initConfig();
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.cartService
      .getTotalQuantity()
      .subscribe((number) => (this.cartQuantity = number));
    console.log(this.cartItems$);

    this.toUsd.getDolarValues().subscribe((value) => {
      this.usdValue = value['serie'][0]['valor'];
      this.totalAmount$.subscribe((total) => {
        this.totalInString = (total / this.usdValue).toFixed(2);
      });
    });
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
    console.log(this.totalAmount$);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) {
      this.cartService.removeItem(item.id);
      return;
    }

    this.cartService.changeQty(-1, item.id);
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('cl-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  }

  clpToUsd(clpValue: number) {
    return clpValue / this.usdValue;
  }

  removeProduct(item: CartItem) {
    this.cartService.removeProduct(item.id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  // PAYPAL

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'AQ7SXsaf2IiNjFYPOBGZdFDpdCNZcyUS3c3MDpnCq4gYKQm5w4kWAHXUt9ifiV-9ndgmTiK98A5jEex4',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: this.totalInString,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.totalInString,
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: this.totalInString,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data: any) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );

        const paymentData = {
          paymentId: data.id,
          paymentTotal: data.purchase_units[0].amount.value,
          paymentMethod: 'PAYPAL',
        };

        this.orderService
          .sendOrderDetails(paymentData)
          .subscribe((response: any) => {
            //Obtener url de la boleta en el bucket
            let url = response['mensaje'];

            //Hacer que el navegador abra la boleta en una nueva pestaña
            window.open(url, '_download');
          });

        this.clearCart();
        this.router.navigate(['']);
      },
      onCancel: (data: any, actions: any) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err: any) => {
        console.log('OnError', err);
      },
      onClick: (data: any, actions: any) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
