import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchWithFilterComponent } from './input-search-with-filter.component';

describe('InputSearchWithFilterComponent', () => {
  let component: InputSearchWithFilterComponent;
  let fixture: ComponentFixture<InputSearchWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchWithFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
