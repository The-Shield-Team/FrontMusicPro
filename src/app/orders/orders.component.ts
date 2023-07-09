import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { OrdersService } from '../services/orders.service';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  // imports: [MatListModule, MatButtonModule, MatDividerModule, MatIconModule, MatTableModule, NgFor],
  // standalone: true,
})
export class OrdersComponent {
  orders: any = [];
  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
  }

  getOrders(status: any) {
    this.ordersService.getOrdersByStatus(status).subscribe((products) => {
      this.orders = this.orders;
    });
  }
}
