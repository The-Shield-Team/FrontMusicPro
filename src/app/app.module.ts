import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { E404Component } from './e404/e404.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { GrocerComponent } from './grocer/grocer.component';
import { AccounterComponent } from './accounter/accounter.component';
import { AdminSalesReportsComponent } from './admin-sales-reports/admin-sales-reports.component';
import { AdminStorePerformanceComponent } from './admin-store-performance/admin-store-performance.component';
import { AdminSalesStrategiesComponent } from './admin-sales-strategies/admin-sales-strategies.component';
import { SalesmanReviewProductsComponent } from './salesman-review-products/salesman-review-products.component';
import { SalesmanReceiveOrdersComponent } from './salesman-receive-orders/salesman-receive-orders.component';
import { SalesmanReceivePaymentsComponent } from './salesman-receive-payments/salesman-receive-payments.component';
import { GrocerPrepareProductsComponent } from './grocer-prepare-products/grocer-prepare-products.component';
import { GrocerDeliverOrderComponent } from './grocer-deliver-order/grocer-deliver-order.component';
import { AccounterRecordDeliveryComponent } from './accounter-record-delivery/accounter-record-delivery.component';
import { AccounterRecordPaymentComponent } from './accounter-record-payment/accounter-record-payment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsAllComponent } from './products-all/products-all.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    E404Component,
    SalesmanComponent,
    GrocerComponent,
    AccounterComponent,
    AdminSalesReportsComponent,
    AdminStorePerformanceComponent,
    AdminSalesStrategiesComponent,
    SalesmanReviewProductsComponent,
    SalesmanReceiveOrdersComponent,
    SalesmanReceivePaymentsComponent,
    GrocerPrepareProductsComponent,
    GrocerDeliverOrderComponent,
    AccounterRecordDeliveryComponent,
    AccounterRecordPaymentComponent,
    LoginComponent,
    HomeComponent,
    ClientRegisterComponent,
    ResetPasswordComponent,
    ProductsAllComponent,
    ProductDetailComponent,
    NavbarComponent,
    PaypalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatGridListModule,
    MatBadgeModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
