import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodChangeComponent } from './payment-method-change.component';

describe('PaymentMethodChangeComponent', () => {
  let component: PaymentMethodChangeComponent;
  let fixture: ComponentFixture<PaymentMethodChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
