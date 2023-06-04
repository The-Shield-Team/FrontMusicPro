import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.css']
})
export class ProductsAllComponent implements OnInit{ 
  productType = this.route.snapshot.paramMap.get('productType');
  productCategory = this.route.snapshot.paramMap.get('productCategory');
  productSubcategory = this.route.snapshot.paramMap.get('productSubcategory')

  constructor(private route: ActivatedRoute) { }

ngOnInit() {

}}

