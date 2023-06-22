import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent {
  products: any = [];
  category: string = '';

  constructor(
    private productServices: ProductsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.category = this.route.url.split('/')[3];
    console.log(this.category);
    this.getProductCategory(this.category);
    console.log(this.getProductCategory(this.category));
  }

  getProductCategory(category: string) {
    this.productServices.getProductCategory(category).subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  formatPrice(price: number) {
    return new Intl.NumberFormat('cl-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);
  }
}
