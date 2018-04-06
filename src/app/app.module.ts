import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/security/login/login/login.component';
import { AddPatientComponent } from './components/secure/patient/add-patient/add-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
