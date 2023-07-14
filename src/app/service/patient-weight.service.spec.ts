import { TestBed } from '@angular/core/testing';

import { PatientWeightService } from './patient-weight.service';

describe('PatientWeightService', () => {
  let service: PatientWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
