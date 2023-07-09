import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient) {}
  getOrdersByStatus(status: string): Observable<any[]> {
    const categoryURL = 
    'https://musicprosolutions.tech/backend/api/order/?status=';
    return  this.http.get<any[]>(categoryURL+status);
  
  
    }
}

