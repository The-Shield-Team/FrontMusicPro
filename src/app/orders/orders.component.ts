import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),]

})


export class OrdersComponent {
  dataSource: MatTableDataSource<any>;
  columns = ['id', 'total', 'status'];
  columnsToDisplayWithExpand = [...this.columns, 'expand'];
  expandedElement: any | null;
  // Resto del código


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
