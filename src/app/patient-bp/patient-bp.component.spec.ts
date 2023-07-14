import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBPComponent } from './patient-bp.component';

describe('PatientBPComponent', () => {
  let component: PatientBPComponent;
  let fixture: ComponentFixture<PatientBPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientBPComponent]
    });
    fixture = TestBed.createComponent(PatientBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
