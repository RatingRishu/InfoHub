import { TestBed } from '@angular/core/testing';

import { HtmlService } from './html.service';

describe('HtmlService', () => {
  let service: HtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
