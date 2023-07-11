import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCircleGroupComponent } from './input-circle-group.component';

describe('InputCircleGroupComponent', () => {
  let component: InputCircleGroupComponent;
  let fixture: ComponentFixture<InputCircleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCircleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCircleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
