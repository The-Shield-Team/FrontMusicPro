import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanReceivePaymentsComponent } from './salesman-receive-payments.component';

describe('SalesmanReceivePaymentsComponent', () => {
  let component: SalesmanReceivePaymentsComponent;
  let fixture: ComponentFixture<SalesmanReceivePaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesmanReceivePaymentsComponent]
    });
    fixture = TestBed.createComponent(SalesmanReceivePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
