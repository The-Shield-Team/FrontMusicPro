import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounterRecordDeliveryComponent } from './accounter-record-delivery.component';

describe('AccounterRecordDeliveryComponent', () => {
  let component: AccounterRecordDeliveryComponent;
  let fixture: ComponentFixture<AccounterRecordDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccounterRecordDeliveryComponent]
    });
    fixture = TestBed.createComponent(AccounterRecordDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
