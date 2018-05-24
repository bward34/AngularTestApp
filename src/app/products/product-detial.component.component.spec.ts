import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail } from './product-detial.component.component';

describe('ProductDetial.ComponentComponent', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetail]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
