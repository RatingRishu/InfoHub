import { TestBed } from '@angular/core/testing';

import { AosService } from './aos.service';

describe('AosService', () => {
  let service: AosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
