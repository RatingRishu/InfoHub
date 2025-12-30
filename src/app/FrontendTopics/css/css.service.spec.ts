import { TestBed } from '@angular/core/testing';

import { CssService } from './css.service';

describe('CssService', () => {
  let service: CssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
