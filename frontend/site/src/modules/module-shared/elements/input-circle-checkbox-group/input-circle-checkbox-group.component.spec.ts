import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCircleCheckboxGroupComponent } from './input-circle-checkbox-group.component';

describe('InputCircleCheckboxGroupComponent', () => {
  let component: InputCircleCheckboxGroupComponent;
  let fixture: ComponentFixture<InputCircleCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCircleCheckboxGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCircleCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
