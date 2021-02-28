import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbillCashComponent } from './totalbill-cash.component';

describe('TotalbillCashComponent', () => {
  let component: TotalbillCashComponent;
  let fixture: ComponentFixture<TotalbillCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalbillCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalbillCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
