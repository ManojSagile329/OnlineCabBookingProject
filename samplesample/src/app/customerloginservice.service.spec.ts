import { TestBed } from '@angular/core/testing';

import { CustomerloginserviceService } from './customerloginservice.service';

describe('CustomerloginserviceService', () => {
  let service: CustomerloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
