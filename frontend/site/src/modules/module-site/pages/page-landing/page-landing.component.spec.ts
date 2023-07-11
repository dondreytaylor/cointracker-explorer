import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLandingComponent } from './page-landing.component';

describe('PageLandingComponent', () => {
  let component: PageLandingComponent;
  let fixture: ComponentFixture<PageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
