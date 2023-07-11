import { TestBed } from '@angular/core/testing';

import { BlockchainCOM } from './blockchaincom.service';

describe('BlockchainCOM', () => {
  let service: BlockchainCOM;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockchainCOM);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
