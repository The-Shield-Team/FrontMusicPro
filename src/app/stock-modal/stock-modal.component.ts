import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.css'],
})
export class StockModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class DialogContentExampleDialog {
  product: any;
  product_id: number = 0;
  isShowStock: Boolean = false;
  stock: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
	//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
	//Add 'implements OnInit' to the class.

	//Obtener el id del producto desde la url
	this.product_id = parseInt(window.location.pathname.split('/')[2]);

	this.getProduct(this.product_id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
      this.stock = data.stocks;
    });
  }
}
