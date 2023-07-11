import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSiteComponent } from './header-site.component';

describe('HeaderSiteComponent', () => {
  let component: HeaderSiteComponent;
  let fixture: ComponentFixture<HeaderSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
