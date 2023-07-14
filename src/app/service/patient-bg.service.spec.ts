import { TestBed } from '@angular/core/testing';

import { PatientBgService } from './patient-bg.service';

describe('PatientBgService', () => {
  let service: PatientBgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientBgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
