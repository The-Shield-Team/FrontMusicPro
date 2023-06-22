import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { E404Component } from './e404/e404.component';
import { AppComponent } from './app.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { GrocerComponent } from './grocer/grocer.component';
import { AccounterComponent } from './accounter/accounter.component';
import { AdminSalesReportsComponent } from './admin-sales-reports/admin-sales-reports.component';
import { AdminSalesStrategiesComponent } from './admin-sales-strategies/admin-sales-strategies.component';
import { AdminStorePerformanceComponent } from './admin-store-performance/admin-store-performance.component';
import { SalesmanReceiveOrdersComponent } from './salesman-receive-orders/salesman-receive-orders.component';
import { SalesmanReceivePaymentsComponent } from './salesman-receive-payments/salesman-receive-payments.component';
import { SalesmanReviewProductsComponent } from './salesman-review-products/salesman-review-products.component';
import { GrocerDeliverOrderComponent } from './grocer-deliver-order/grocer-deliver-order.component';
import { GrocerPrepareProductsComponent } from './grocer-prepare-products/grocer-prepare-products.component';
import { AccounterRecordDeliveryComponent } from './accounter-record-delivery/accounter-record-delivery.component';
import { AccounterRecordPaymentComponent } from './accounter-record-payment/accounter-record-payment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProductsAllComponent } from './products-all/products-all.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  { path: 'client', component: ClientComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'sales-reports', component: AdminSalesReportsComponent },
      { path: 'sales-strategies', component: AdminSalesStrategiesComponent },
      { path: 'store-performance', component: AdminStorePerformanceComponent },
    ],
  },
  {
    path: 'salesman',
    component: SalesmanComponent,
    children: [
      { path: 'receive-orders', component: SalesmanReceiveOrdersComponent },
      { path: 'receive-payments', component: SalesmanReceivePaymentsComponent },
      { path: 'review-products', component: SalesmanReviewProductsComponent },
    ],
  },
  {
    path: 'grocer',
    component: GrocerComponent,
    children: [
      { path: 'deliver-order', component: GrocerDeliverOrderComponent },
      { path: 'prepare-products', component: GrocerPrepareProductsComponent },
    ],
  },
  {
    path: 'accounter',
    component: AccounterComponent,
    children: [
      { path: 'record-delivery', component: AccounterRecordDeliveryComponent },
      { path: 'record-payment', component: AccounterRecordPaymentComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'reset-Password', component: ResetPasswordComponent },
  { path: 'products', component: ProductsAllComponent },
  { path: 'product/:product_id', component: ProductDetailComponent },
  {
    path: 'products/:productType/:productCategory',
    component: ProductsAllComponent,
  },
  {
    path: 'products/:productType/:productCategory/:productSubcategory',
    component: ProductsAllComponent,
  },
  { path: 'paypal', component: PaypalComponent },
  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
