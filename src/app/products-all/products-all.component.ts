import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.css'],
})
export class ProductsAllComponent implements OnInit {
  productType = this.route.snapshot.paramMap.get('productType');
  productCategory = this.route.snapshot.paramMap.get('productCategory');
  productSubcategory = this.route.snapshot.paramMap.get('productSubcategory');
  cardCategories = [
    {name: 'Instrumentos de Cuerdas', path: 'products/cuerdas' },
    {name: 'Percusión', path: 'products/percusion'},
    {name: 'Amplificadores', path: 'products/amplificadores'},
    {name: 'Accesorios varios', path: 'products/accesorios'}
  ];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  redireccionar = (url: string) => {
    location.href = url;
  };

  products: any[] = [];
  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
