import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayStudentsProfileService } from '../servicrs/display-students-profile.service';
import { DisplayStudentsProfile } from '../models/display-students-profile';

@Component({
  selector: 'app-student-admin-profile',
  templateUrl: './student-admin-profile.component.html',
  styleUrls: ['./student-admin-profile.component.css']
})
export class StudentAdminProfileComponent implements OnInit {

  displayStudentsProfiles = new DisplayStudentsProfile(); 
  sessinEmail = sessionStorage.getItem('sessionAdminEmail');
  studentData: any = {};
  constructor(private route: ActivatedRoute, private router: Router,private service:DisplayStudentsProfileService) { }
  id:number;
  displayStudentsProfile : DisplayStudentsProfile[];
  ngOnInit() { 
    this.route.params.subscribe(params => { 
      this.id = params['id'];  
      this.service.getPerticularStudent(this.id).subscribe(res => {
        this.studentData = res;  
        // console.log(this.studentData.FullName); 
    });
  }); 
  }   

  updateAdminStudentData(){
    // console.log(this.studentData); 
    this.service.updateStudentData(this.studentData).subscribe(data=>{console.log("success"),data}); 
  }
  
logout(){
  sessionStorage.removeItem(this.sessinEmail);  
  this.router.navigate(['/admin-page'])
} 

}  
