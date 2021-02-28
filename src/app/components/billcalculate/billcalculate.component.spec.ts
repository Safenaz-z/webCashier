import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcalculateComponent } from './billcalculate.component';

describe('BillcalculateComponent', () => {
  let component: BillcalculateComponent;
  let fixture: ComponentFixture<BillcalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillcalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillcalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
