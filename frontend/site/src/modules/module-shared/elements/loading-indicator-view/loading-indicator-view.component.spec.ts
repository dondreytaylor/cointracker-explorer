import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorViewComponent } from './loading-indicator-view.component';

describe('LoadingIndicatorViewComponent', () => {
  let component: LoadingIndicatorViewComponent;
  let fixture: ComponentFixture<LoadingIndicatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIndicatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
