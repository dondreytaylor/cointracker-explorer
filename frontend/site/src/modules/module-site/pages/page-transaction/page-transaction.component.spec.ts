import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransactionComponent } from './page-transaction.component';

describe('PageTransactionComponent', () => {
  let component: PageTransactionComponent;
  let fixture: ComponentFixture<PageTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
