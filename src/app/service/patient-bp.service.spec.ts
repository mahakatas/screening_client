import { TestBed } from '@angular/core/testing';

import { PatientBpService } from './patient-bp.service';

describe('PatientBpService', () => {
  let service: PatientBpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientBpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
