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
      'https://musicprosolutions.tech/backend/api/order/?status=';
    console.log(URL + status)
    return this.http.get<any[]>(URL + status);


  }
}
