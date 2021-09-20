import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationalDetailsService } from '../servicrs/educational-details.service';  
import { CommanServiceService } from '../servicrs/comman-service.service'; 
import { Studenteducation } from '../models/studenteducation';

@Component({
  selector: 'app-student-educational-detail',
  templateUrl: './student-educational-detail.component.html',
  styleUrls: ['./student-educational-detail.component.css']
})
export class StudentEducationalDetailComponent implements OnInit {

  // studentDatas = new RegiClass(); 
  stringifiedStudentData: string;
  userNames = sessionStorage.getItem('sessionEmail');
  parsedStudentJson: any;

  constructor(private route:Router, private services:EducationalDetailsService, private commanService: CommanServiceService ) { }
  
//   parsedStudentJson: Studenteducation =  {
//     Id : "",
//     FullName : "",
//     Email : "",
//     sscMarks : "",
//     hscMarks : "",
//     PolyMarks : "",
//     EngineeringMarks : "",
//     ProjectDetails : "",
//     City : "", 
//     Gender : "", 
//     PinCode : "", 
//     Resume : "",
//     State : "",
//     Contact : ""
//  };  

  ngOnInit() {
    // alert(this.userNames);
    this.commanService.getStudentProfileData(this.userNames).subscribe(data=>{  
    this.stringifiedStudentData = JSON.stringify(data);
    this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
    // console.log(this.parsedStudentJson);
    })
  }
 
 
  logout(){ 
    sessionStorage.removeItem(this.userNames);
    this.route.navigate(['/login-page']);
  } 

  onClicks(){  
    this.services.updateEducationalData(this.parsedStudentJson).subscribe(data=>{console.log("success"),data;})
  }  

} 