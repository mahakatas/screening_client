import { TestBed } from '@angular/core/testing';

import { PatientHeightService } from './patient-height.service';

describe('PatientHeightService', () => {
  let service: PatientHeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
