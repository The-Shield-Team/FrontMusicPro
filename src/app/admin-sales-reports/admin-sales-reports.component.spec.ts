import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesReportsComponent } from './admin-sales-reports.component';

describe('AdminSalesReportsComponent', () => {
  let component: AdminSalesReportsComponent;
  let fixture: ComponentFixture<AdminSalesReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSalesReportsComponent]
    });
    fixture = TestBed.createComponent(AdminSalesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
