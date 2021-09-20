import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCompany } from '../models/update-company';
import { DisplayCompanyProfileService } from '../servicrs/display-company-profile.service';
import { UploadService } from '../servicrs/upload.service';

@Component({
  selector: 'app-studentapplycompany',
  templateUrl: './studentapplycompany.component.html',
  styleUrls: ['./studentapplycompany.component.css']
})
export class StudentapplycompanyComponent implements OnInit {

  UpdateCompanyDetails : UpdateCompany[];
  UploadResume: any;
  uploadResponse: any;
  userEmail: void;

  constructor(private route:Router,private service:DisplayCompanyProfileService,private uploadService: UploadService) { }

  userNames = sessionStorage.getItem('sessionEmail'); 
  Email = this.userNames;

  ngOnInit() {
    this.service.displayCompanyData().subscribe((UpdateCompanyDetails : UpdateCompany[])=>{
      this.UpdateCompanyDetails=UpdateCompanyDetails;
      // console.log(this.UpdateCompanyDetails);
       
  // console.log(this.Email);
    }) 
  }

  // onFileSelect(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.UploadResume.get('avatar').setValue(file);
  //   }
  // }

  // uploadResume() {
  //   const formData = new FormData();
  //   formData.append('avatar', this.UploadResume.get('avatar').value);
  //   formData.append('userEmailKey',this.userNames);
  //   this.userNames = sessionStorage.getItem('sessionEmail'); 

  //   this.uploadService.uploadFile(formData).subscribe(
  //     (res) => {
  //       this.uploadResponse = res;
  //         console.log("Success");
  //     },
  //     (err) => {  
  //       console.log(err);
  //     }
  //   );
  // } 

  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.userNames);
    this.route.navigate(['/login-page']);
  }

} 
