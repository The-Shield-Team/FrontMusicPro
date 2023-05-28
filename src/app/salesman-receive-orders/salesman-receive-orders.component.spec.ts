import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanReceiveOrdersComponent } from './salesman-receive-orders.component';

describe('SalesmanReceiveOrdersComponent', () => {
  let component: SalesmanReceiveOrdersComponent;
  let fixture: ComponentFixture<SalesmanReceiveOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesmanReceiveOrdersComponent]
    });
    fixture = TestBed.createComponent(SalesmanReceiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
