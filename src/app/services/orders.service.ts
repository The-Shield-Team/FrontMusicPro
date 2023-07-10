import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient) { }
  getOrdersByStatus(status: string): Observable<any[]> {
    const URL =
      'https://musicprosolutions.tech/backend/api/detail_order_with_detail/';


    console.log(URL)
    return this.http.get<any[]>(URL);


  }
}
