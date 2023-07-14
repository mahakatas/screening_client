import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHeightComponent } from './patient-height.component';

describe('PatientHeightComponent', () => {
  let component: PatientHeightComponent;
  let fixture: ComponentFixture<PatientHeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientHeightComponent]
    });
    fixture = TestBed.createComponent(PatientHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
