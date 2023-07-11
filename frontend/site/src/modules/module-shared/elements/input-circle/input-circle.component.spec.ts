import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCircleComponent } from './input-circle.component';

describe('InputCircleComponent', () => {
  let component: InputCircleComponent;
  let fixture: ComponentFixture<InputCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
