import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommanServiceService } from '../servicrs/comman-service.service';
import { CompanyService } from '../servicrs/company.service';
import { DisplayStudentsProfileService } from '../servicrs/display-students-profile.service';
import { UploadService } from '../servicrs/upload.service';

@Component({
  selector: 'app-apply-company',
  templateUrl: './apply-company.component.html',
  styleUrls: ['./apply-company.component.css']
})
export class ApplyCompanyComponent implements OnInit {

  userNames = sessionStorage.getItem('sessionEmail');
  userEmail: void;
  id: any;
  companyData: any;
  applyForms: any;
  uploadResponse: any;
  form: any;
  stringifiedStudentData: string;
  parsedStudentJson: any;
  parsedStudentJson1: any;
  ResumeUpload: any;

  constructor(private commanService: CommanServiceService,private formBuilder: FormBuilder,private companyService : CompanyService,private router:Router,private uploadService: UploadService,private route: ActivatedRoute,private service:DisplayStudentsProfileService) { 
    this.form = this.formBuilder.group({
      avatar: ['']
    })
      this.ResumeUpload = this.formBuilder.group({
      idCompany: [''],
      CompanyName: [''],
      ssc: [''],
      hsc: [''],
      diploma: [''],
      engineering: [''],
      YD: [''],
      technology: [''],
      companyDetail: [''],
      studentId: [''],
      FullName: [''],
      Email: [''],
      Contact: [''],
      Gender: [''],
      City: [''],
      PinCode: [''],
      State: [''],
      sscMarks: [''],
      hscMarks: [''],
      PolyMarks: [''],
      EngineeringMarks: [''],
      ProjectDetails: ['']
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['Id'];  
      console.log(this.id);
      this.service.getCompanyData(this.id).subscribe(res => {
        this.companyData = res;  
        // console.log(this.companyData);   
    }); 
    })  

    this.commanService.getStudentProfileData(this.userNames).subscribe(data=>{  
      this.stringifiedStudentData = JSON.stringify(data);
      this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
    })

    // this.commanService.getStudentProfileData(this.userNames).subscribe(data=>{  
    //   this.stringifiedStudentData = JSON.stringify(data);
    //   this.parsedStudentJson1 = JSON.parse(this.stringifiedStudentData) 
    //   })

    
  } 

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);
    formData.append('userEmailKey',this.userNames);
    this.userNames = sessionStorage.getItem('sessionEmail'); 
    console.log(formData);
    this.uploadService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
          console.log("File Successfully Updated");
      },
      (err) => {  
        console.log(err);
      }
    );
  }  

  onClicks(ResumeUpload){
    //  console.log(ResumeUpload);
     this.companyService.applyCompany(ResumeUpload).subscribe(data=>{console.log("success",data)});
  }

  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.userNames);
    this.router.navigate(['/login-page']);
  }

}
