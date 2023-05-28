import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounterComponent } from './accounter.component';

describe('AccounterComponent', () => {
  let component: AccounterComponent;
  let fixture: ComponentFixture<AccounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccounterComponent]
    });
    fixture = TestBed.createComponent(AccounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
