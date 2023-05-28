import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounterRecordPaymentComponent } from './accounter-record-payment.component';

describe('AccounterRecordPaymentComponent', () => {
  let component: AccounterRecordPaymentComponent;
  let fixture: ComponentFixture<AccounterRecordPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccounterRecordPaymentComponent]
    });
    fixture = TestBed.createComponent(AccounterRecordPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
