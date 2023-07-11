import { TestBed } from '@angular/core/testing';

import { WindowScrollingService } from './window-scrolling.service';

describe('WindowScrollingService', () => {
  let service: WindowScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
