import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component'; 
import { HttpClientModule } from '@angular/common/http';
import { RegiServiceService } from './servicrs/regi-service.service';
import { LoginServiceService } from './servicrs/login-service.service';
import { AdminPageComponent } from './admin-page/admin-page.component'; 
import { StudentDisplayDataComponent } from './student-display-data/student-display-data.component';
import { AdminServiceService } from './servicrs/admin-service.service';
import { StudentUpdateDataComponent } from './student-update-data/student-update-data.component';
import { UpdateServiceService } from './servicrs/update-service.service';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { UploadService } from './servicrs/upload.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomePgeComponent } from './admin-home-pge/admin-home-pge.component';
import { StudentEducationalDetailComponent } from './student-educational-detail/student-educational-detail.component';
import { EducationalDetailsService } from './servicrs/educational-details.service';
import { AdminProfilePageComponent } from './admin-profile-page/admin-profile-page.component';
import { DisplayStudentsProfileComponent } from './display-students-profile/display-students-profile.component';
import { UpdateCompanyProfileComponent } from './update-company-profile/update-company-profile.component';
import { DisplayCompanyProfileComponent } from './display-company-profile/display-company-profile.component';
import { AdminprofileService } from './servicrs/adminprofile.service';
import { UpdateCompanyService } from './servicrs/update-company.service';
import { StudentAdminProfileComponent } from './student-admin-profile/student-admin-profile.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './servicrs/company.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StudentapplycompanyComponent } from './studentapplycompany/studentapplycompany.component';
import { ApplyCompanyComponent } from './apply-company/apply-company.component';
import { AdminprofileupdateComponent } from './adminprofileupdate/adminprofileupdate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationComponent,
    HomePageComponent, 
    AdminPageComponent, 
    StudentDisplayDataComponent, 
    StudentUpdateDataComponent,
    ResumeUploadComponent,
    AdminHomePgeComponent,
    StudentEducationalDetailComponent,
    AdminProfilePageComponent,
    DisplayStudentsProfileComponent,
    UpdateCompanyProfileComponent,
    DisplayCompanyProfileComponent,
    StudentAdminProfileComponent,
    CompanyComponent,
    ProfilePageComponent,
    StudentapplycompanyComponent,
    ApplyCompanyComponent,
    AdminprofileupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegiServiceService,LoginServiceService,AdminServiceService,UpdateServiceService,UploadService,EducationalDetailsService,AdminprofileService,UpdateCompanyService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
