import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCircleCheckboxComponent } from './input-circle-checkbox.component';

describe('InputCircleCheckboxComponent', () => {
  let component: InputCircleCheckboxComponent;
  let fixture: ComponentFixture<InputCircleCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCircleCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCircleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
