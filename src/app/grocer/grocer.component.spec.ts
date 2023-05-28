import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerComponent } from './grocer.component';

describe('GrocerComponent', () => {
  let component: GrocerComponent;
  let fixture: ComponentFixture<GrocerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrocerComponent]
    });
    fixture = TestBed.createComponent(GrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
