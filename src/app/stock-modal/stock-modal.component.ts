import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.css'],
})
export class StockModalComponent {

 	@Input() predictResult: any;

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

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {

  }
}
