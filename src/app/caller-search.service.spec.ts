import { TestBed } from '@angular/core/testing';

import { CallerSearchService } from './caller-search.service';

describe('CallerSearchService', () => {
  let service: CallerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
