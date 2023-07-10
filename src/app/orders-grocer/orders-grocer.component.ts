import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-orders-grocer',
  templateUrl: './orders-grocer.component.html',
  styleUrls: ['./orders-grocer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),]

})


export class OrdersGrocerComponent {
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
  acceptButton(order: any) {
    let id = order.id;
    let status = order.status;
    switch (status) {
      case 'P':
        this.ordersService.updateOrder(order, "A")
          .subscribe(response => {
            window.location.reload()
          })
        break;
      case 'A':
        this.ordersService.updateOrder(order, "G")
          .subscribe(response => {
            window.location.reload()
          })

        break;
      case 'G':
        this.ordersService.updateOrder(order, "B")
          .subscribe(response => {
            window.location.reload()
          })
        break;

      case 'B':
        this.ordersService.updateOrder(order, "V")
          .subscribe(response => {
            window.location.reload()
          })
        break;
      case 'V':
        this.ordersService.updateOrder(order, "S")
          .subscribe(response => {
            window.location.reload()
          })
        break;

      case 'S':
        this.ordersService.updateOrder(order, "E")
          .subscribe(response => {
            window.location.reload()
          })
        break;
    }
  }
  rejectButton(order: any) {
    let id = order.id;
    this.ordersService.updateOrder(order, "R")
      .subscribe(response => {
        window.location.reload()
      })

  }

  sendButton(order: any) {
    let id = order.id;
    this.ordersService.updateOrder(order, "C")
      .subscribe(response => {
        window.location.reload()
      })
  }

  retiroButton(order: any) {
    let id = order.id;
    this.ordersService.updateOrder(order, "S")

  }
}
