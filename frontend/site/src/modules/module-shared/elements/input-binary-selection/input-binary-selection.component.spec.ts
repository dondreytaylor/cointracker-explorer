import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBinarySelectionComponent } from './input-binary-selection.component';

describe('InputBinarySelectionComponent', () => {
  let component: InputBinarySelectionComponent;
  let fixture: ComponentFixture<InputBinarySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBinarySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBinarySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
