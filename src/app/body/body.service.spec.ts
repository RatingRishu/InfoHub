import { TestBed } from '@angular/core/testing';

import { BodyService } from './body.service';

describe('BodyService', () => {
  let service: BodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
