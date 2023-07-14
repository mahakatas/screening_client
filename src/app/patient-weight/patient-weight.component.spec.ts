import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWeightComponent } from './patient-weight.component';

describe('PatientWeightComponent', () => {
  let component: PatientWeightComponent;
  let fixture: ComponentFixture<PatientWeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientWeightComponent]
    });
    fixture = TestBed.createComponent(PatientWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
