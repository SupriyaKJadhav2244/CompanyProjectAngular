import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms'; 
import { UploadService } from '../servicrs/upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayStudentsProfileService } from '../servicrs/display-students-profile.service';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit { 

  form: FormGroup;
  uploadResponse;
  userNames = sessionStorage.getItem('sessionEmail');
  id: any;
  companyData: Object;
  call: Object;

  constructor(private formBuilder: FormBuilder,private service:DisplayStudentsProfileService,private route: ActivatedRoute, private uploadService: UploadService,private router:Router) { }
 
  userEmail = sessionStorage.getItem('sessionEmail');
 
  ngOnInit() { 
    this.form = this.formBuilder.group({
      avatar: ['']
    });

    
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    this.route.params.subscribe(params => { 
      this.id = params['Id']; 
      // console.log(this.id);

      this.service.getCompanyData(this.id).subscribe(res => {
        this.companyData = res; 
        // console.log(this.companyData.company); 
        
        
    // this.service.applyResume(this.companyData.company).subscribe(data=>{console.log("success"),data});
    });  
    })

    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);
    formData.append('userEmailKey',this.userEmail);
    this.userEmail = sessionStorage.getItem('sessionEmail'); 

    // this.uploadService.uploadFile(formData).subscribe(
      // (res) => {
      //   this.uploadResponse = res;
      //     console.log("Success");
      // },
      (err) => {  
        console.log(err);
      }
    // );
  } 

  logout(){ 
    sessionStorage.removeItem('sessionEmail');
    this.router.navigate(['/login-page']);
  }
}
