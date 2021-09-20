import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from '../servicrs/comman-service.service';
import { StudentClass } from '../models/student-class';
import { Studentdisplayclass } from '../models/studentdisplayclass';
import { DisplayStudentsProfileService } from '../servicrs/display-students-profile.service';
import { DisplayStudentsProfile } from '../models/display-students-profile';

@Component({
  selector: 'app-student-display-data',
  templateUrl: './student-display-data.component.html',
  styleUrls: ['./student-display-data.component.css']
})
export class StudentDisplayDataComponent implements OnInit {

  userEmail;

  userName = sessionStorage.getItem('sessionEmail');
  students: DisplayStudentsProfile[];
    
  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.userName);
    this.route.navigate(['/login-page']);
  }

  userNames; 
  constructor(private route:Router, private commanService: CommanServiceService,private service:DisplayStudentsProfileService) { 
    this.userNames = sessionStorage.getItem('sessionEmail');
  }

  studentClass= new StudentClass();
  
  stringifiedStudentData: any;   

  parsedStudentJson: Studentdisplayclass =  {
    FullName : "",
    Email : "",
    Contact : "",
    City : "",
    PinCode : null,
    State : ""
 };

  ngOnInit() {
    this.commanService.getStudentProfileData(this.userNames).subscribe(data=>{  
      this.stringifiedStudentData = JSON.stringify(data);
      this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
      if(this.parsedStudentJson.Email != null && this.parsedStudentJson.Contact != null) { 
        // console.log(data);    
      }
      else{
        alert("Student Profile Data Not Available.")
      }   
    })   
  } 

  // this.service.displayProfile().subscribe((Datas: DisplayStudentsProfile[])=>{  
  //   // this.stringifiedStudentData = JSON.stringify(data);
  //   // this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
  //   // console.log(this.parsedStudentJson);
  //   // console.log(data);
  //   this.students = Datas;  
  //   console.log(this.students);
  // } ) 
// }
}
