import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BootstrapComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'banking'`, () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('banking');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('banking app is running!');
  });
});
