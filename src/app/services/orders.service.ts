import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient, private dialog: MatDialog) { }
  getOrdersByStatus(status: string): Observable<any[]> {
    const URL =
      'https://musicprosolutions.tech/backend/api/detail_order_with_detail/?status=';


    console.log(URL)
    return this.http.get<any[]>(URL + status);

  }

  updateOrder(order: any, newStatus: string) {
    let url = 'https://musicprosolutions.tech/backend/api/order/'
    const body = {
      "id": order.id,
      "total_order": order.total_order,
      "status": newStatus
    }
    url = url + order.id + "/"
    return this.http.put(url, body).pipe(
      tap(() => {
        console.log('Order updated successfully');

      }),
      catchError(error => {
        console.error('Failed to update order', error);
        return throwError(error);
      })
    );

  }
}
