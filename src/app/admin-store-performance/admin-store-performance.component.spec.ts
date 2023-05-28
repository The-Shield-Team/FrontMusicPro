import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStorePerformanceComponent } from './admin-store-performance.component';

describe('AdminStorePerformanceComponent', () => {
  let component: AdminStorePerformanceComponent;
  let fixture: ComponentFixture<AdminStorePerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStorePerformanceComponent]
    });
    fixture = TestBed.createComponent(AdminStorePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
