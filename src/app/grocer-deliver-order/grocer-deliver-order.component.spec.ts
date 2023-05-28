import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerDeliverOrderComponent } from './grocer-deliver-order.component';

describe('GrocerDeliverOrderComponent', () => {
  let component: GrocerDeliverOrderComponent;
  let fixture: ComponentFixture<GrocerDeliverOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrocerDeliverOrderComponent]
    });
    fixture = TestBed.createComponent(GrocerDeliverOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
