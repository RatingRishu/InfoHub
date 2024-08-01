import { TestBed } from '@angular/core/testing';

import { PrimeNgService } from './prime-ng.service';

describe('PrimeNgService', () => {
  let service: PrimeNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
