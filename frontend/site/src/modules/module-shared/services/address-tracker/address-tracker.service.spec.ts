import { TestBed } from '@angular/core/testing';

import { AddressTrackerService } from './address-tracker.service';

describe('AddressTrackerService', () => {
  let service: AddressTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
