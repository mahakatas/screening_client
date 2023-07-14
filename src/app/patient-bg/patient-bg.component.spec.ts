import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBGComponent } from './patient-bg.component';

describe('PatientBGComponent', () => {
  let component: PatientBGComponent;
  let fixture: ComponentFixture<PatientBGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientBGComponent]
    });
    fixture = TestBed.createComponent(PatientBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
