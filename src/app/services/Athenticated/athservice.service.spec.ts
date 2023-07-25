import { TestBed } from '@angular/core/testing';

import { AthserviceService } from './athservice.service';

describe('AthserviceService', () => {
  let service: AthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
