import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class PatientService {

  private patientsUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.patientsUrl = 'http://localhost:8080/screening/';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl+"patients");
  }

  public save(Patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl+"addPatient", Patient);
  }

  public delete(Patientname: String) {

    return this.http.post<Patient>(this.patientsUrl+"deletePatient" , Patientname);
  }

  gotoPatientList() {
    this.router.navigate(['/patients']);
  }
}
