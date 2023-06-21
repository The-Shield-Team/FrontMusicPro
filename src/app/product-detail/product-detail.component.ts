import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: any;
  product_id: number = 0;

  constructor(private productService: ProductsService, private route: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    //Obtener el id del producto desde la url
    this.product_id = parseInt(this.route.url.split('/')[2]);

    this.getProduct(this.product_id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
    });
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(price);
  }
}
