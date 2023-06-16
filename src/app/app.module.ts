import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { E404Component } from './e404/e404.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { GrocerComponent } from './grocer/grocer.component';
import { AccounterComponent } from './accounter/accounter.component'
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
    ProductDetailComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
