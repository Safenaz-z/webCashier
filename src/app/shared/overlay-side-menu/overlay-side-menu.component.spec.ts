import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySideMenuComponent } from './overlay-side-menu.component';

describe('OverlaySideMenuComponent', () => {
  let component: OverlaySideMenuComponent;
  let fixture: ComponentFixture<OverlaySideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlaySideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
