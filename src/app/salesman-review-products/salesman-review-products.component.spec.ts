import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanReviewProductsComponent } from './salesman-review-products.component';

describe('SalesmanReviewProductsComponent', () => {
  let component: SalesmanReviewProductsComponent;
  let fixture: ComponentFixture<SalesmanReviewProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesmanReviewProductsComponent]
    });
    fixture = TestBed.createComponent(SalesmanReviewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
