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
}