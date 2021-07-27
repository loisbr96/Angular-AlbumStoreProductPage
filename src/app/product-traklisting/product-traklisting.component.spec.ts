import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTraklistingComponent } from './product-traklisting.component';

describe('ProductTraklistingComponent', () => {
  let component: ProductTraklistingComponent;
  let fixture: ComponentFixture<ProductTraklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTraklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTraklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
