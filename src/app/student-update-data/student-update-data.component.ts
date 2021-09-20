import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommanServiceService } from '../servicrs/comman-service.service';
import { StudentClass } from '../models/student-class';
import { RegiClass } from '../models/regi';
import { UpdateClass } from '../models/update-class';
import { UpdateServiceService } from '../servicrs/update-service.service';
import { Studentdisplayclass } from '../models/studentdisplayclass';
import { Studentupdate } from '../models/studentupdate';

@Component({
  selector: 'app-student-update-data',
  templateUrl: './student-update-data.component.html',
  styleUrls: ['./student-update-data.component.css']
})
export class StudentUpdateDataComponent implements OnInit {
 

  userNames;
  constructor(private router: ActivatedRoute,private route:Router, private commanService: CommanServiceService, private upService:UpdateServiceService) 
  { 
    this.userNames = sessionStorage.getItem('sessionEmail');
  }
  id;
  studentId; 
  studentClass= new StudentClass();
  students = new UpdateClass();

  stringifiedStudentData: any; 
  userEmail; 

  parsedStudentJson: Studentupdate =  {
    Id : "",
    FullName : "",
    Email : "",
    Contact : "",
    Gender : "",
    City : "",
    PinCode : null,
    State : ""
 };
      
  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.userNames);
    this.route.navigate(['/login-page']);  
  }

  ngOnInit() { 
    this.commanService.getStudentProfileData(this.userNames).subscribe(data=>{  
      this.stringifiedStudentData = JSON.stringify(data);
      this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
      // console.log(this.parsedStudentJson); 
      if(this.parsedStudentJson.Email != null && this.parsedStudentJson.Contact != null) { 
        // console.log(this.parsedStudentJson.Email); 
      }
      else{
        alert("Student Profile Data Not Available")
      }     
    }) 
  }
  
  onClicks(){  
    // console.log(this.parsedStudentJson); 
    this.upService.updateData(this.parsedStudentJson).subscribe(data=>{
      console.log("success"),
      data;
    })
  }

}
