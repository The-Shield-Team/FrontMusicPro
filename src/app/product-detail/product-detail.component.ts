import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CartItem } from '../interfaces/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: any;
  product_id: number = 0;
  isShowStock: Boolean=false; 
  stock: any;

  constructor(
    private productService: ProductsService,
    private route: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //Obtener el id del producto desde la url
    this.product_id = parseInt(this.route.url.split('/')[2]);

    this.getProduct(this.product_id);
  }

  showStock(){
    this.isShowStock = this.isShowStock?false:true;
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
      this.stock = data.stocks;
    });
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('cl-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  }

  addItemToCart() {
    const cartItem: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      quantity: 1,
    };

    const isInCart = this.cartService.isInCart(cartItem.id);

    isInCart
      ? this.cartService.changeQty(1, cartItem.id)
      : this.cartService.addToCart(cartItem);
  }
}
