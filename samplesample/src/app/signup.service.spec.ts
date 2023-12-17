import { TestBed } from '@angular/core/testing';

import { SIgnupService } from './signup.service';

describe('SIgnupService', () => {
  let service: SIgnupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SIgnupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
