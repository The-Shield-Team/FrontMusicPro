import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerPrepareProductsComponent } from './grocer-prepare-products.component';

describe('GrocerPrepareProductsComponent', () => {
  let component: GrocerPrepareProductsComponent;
  let fixture: ComponentFixture<GrocerPrepareProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrocerPrepareProductsComponent]
    });
    fixture = TestBed.createComponent(GrocerPrepareProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
