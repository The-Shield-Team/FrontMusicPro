import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersGrocerComponent } from './orders-grocer.component';

describe('OrdersGrocerComponent', () => {
  let component: OrdersGrocerComponent;
  let fixture: ComponentFixture<OrdersGrocerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersGrocerComponent]
    });
    fixture = TestBed.createComponent(OrdersGrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
