import { TestBed } from '@angular/core/testing';

import { WebapiService } from './webapi.service';

describe('WebapiService', () => {
  let service: WebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
