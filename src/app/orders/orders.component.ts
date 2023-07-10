import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],

})
export class OrdersComponent {
  dataSource: MatTableDataSource<any>;
  columns = ['id', 'total_order', 'status'];
  constructor(private ordersService: OrdersService) {
    this.dataSource = new MatTableDataSource<any>([]);
  }
  getOrders(status: string) {
    this.ordersService.getOrdersByStatus(status).subscribe(pedidos => {
      this.dataSource.data = pedidos;
      console.log(pedidos)
    });
  }
}
