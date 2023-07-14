import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PatientWeightComponent } from './patient-weight/patient-weight.component';
import { PatientHeightComponent } from './patient-height/patient-height.component';
import { PatientBPComponent } from './patient-bp/patient-bp.component';
import { PatientBGComponent } from './patient-bg/patient-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    TreatmentComponent,
    PatientWeightComponent,
    PatientHeightComponent,
    PatientBPComponent,
    PatientBGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
