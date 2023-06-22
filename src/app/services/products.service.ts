import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    const sectionURL =
    //'https://fakestoreapi.com/products';
    'https://musicprosolutions.tech/backend/api/product/';

    return this.http.get<any[]>(sectionURL);
  }

  getProduct(id: number): Observable<any> {
    const sectionURL =
    //'https://fakestoreapi.com/products';
    'https://musicprosolutions.tech/backend/api/product/';

    return this.http.get<any>(sectionURL + id);
  }
  getProductCategory(category: string): Observable<any[]> {
  const categoryURL = 
  'https://musicprosolutions.tech/backend/api/product/?category=';
  return  this.http.get<any[]>(categoryURL+category);


  }
}