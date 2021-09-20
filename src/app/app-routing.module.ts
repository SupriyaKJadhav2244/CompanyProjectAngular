import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component'; 
import { AdminPageComponent } from './admin-page/admin-page.component'; 
import { StudentDisplayDataComponent } from './student-display-data/student-display-data.component';
import { StudentUpdateDataComponent } from './student-update-data/student-update-data.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { AdminHomePgeComponent } from './admin-home-pge/admin-home-pge.component';
import { StudentEducationalDetailComponent } from './student-educational-detail/student-educational-detail.component';
import { AdminProfilePageComponent } from './admin-profile-page/admin-profile-page.component';
import { DisplayStudentsProfileComponent } from './display-students-profile/display-students-profile.component';
import { UpdateCompanyProfileComponent } from './update-company-profile/update-company-profile.component';
import { DisplayCompanyProfileComponent } from './display-company-profile/display-company-profile.component';
import { StudentAdminProfileComponent } from './student-admin-profile/student-admin-profile.component';
import { CompanyComponent } from './company/company.component';
import { StudentapplycompanyComponent } from './studentapplycompany/studentapplycompany.component';
import { ApplyCompanyComponent } from './apply-company/apply-company.component';
import { AdminprofileupdateComponent } from './adminprofileupdate/adminprofileupdate.component';


const routes: Routes = [  
  {path:'',redirectTo:'login-page',pathMatch:'full'},
  {path:'login-page',component:LoginPageComponent},
  {path:'admin-page',component:AdminPageComponent} , 
  {path:'registration',component:RegistrationComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'student-update-data',component:StudentUpdateDataComponent},   
  {path:'student-display-data',component:StudentDisplayDataComponent},
  {path:'resume-upload/:Id',component:ResumeUploadComponent},
  {path:'student-educational-detail',component:StudentEducationalDetailComponent},
  {path:'admin-home-pge',component:AdminHomePgeComponent},
  {path:'admin-profile-page',component:AdminProfilePageComponent},
  {path:'studentApplyCompany',component:StudentapplycompanyComponent},
  {path:'applyCompany/:Id',component:ApplyCompanyComponent},
  {path:'updateAdminProfile/:Id',component:AdminprofileupdateComponent},
  {path:'display-students-profile',
      children:[
          {path:'',component:DisplayStudentsProfileComponent}, 
          {path:'student-admin-profile/:id',component:StudentAdminProfileComponent}
      ]},
  {path:'update-company-profile',component:UpdateCompanyProfileComponent}, 
  
  // {path:'company',component:CompanyComponent} 

  {path:'display-company-profile',
  children:[{path:'',component:DisplayCompanyProfileComponent},
            {path:'company/:id',component:CompanyComponent}
          ]
        } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
