import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesStrategiesComponent } from './admin-sales-strategies.component';

describe('AdminSalesStrategiesComponent', () => {
  let component: AdminSalesStrategiesComponent;
  let fixture: ComponentFixture<AdminSalesStrategiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSalesStrategiesComponent]
    });
    fixture = TestBed.createComponent(AdminSalesStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
