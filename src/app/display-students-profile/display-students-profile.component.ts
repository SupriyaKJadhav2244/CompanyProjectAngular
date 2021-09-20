import { Component, OnInit } from '@angular/core';
import { DisplayStudentsProfileService } from '../servicrs/display-students-profile.service'; 
import { DisplayStudentsProfile } from '../models/display-students-profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-students-profile',
  templateUrl: './display-students-profile.component.html',
  styleUrls: ['./display-students-profile.component.css']
})  
export class DisplayStudentsProfileComponent implements OnInit {

  sessinEmail = sessionStorage.getItem('sessionAdminEmail');
  stringifiedStudentData: string;  
  id: number;    

  constructor(private route: ActivatedRoute,private router: Router,private service:DisplayStudentsProfileService) { } 
  students : DisplayStudentsProfile[]; 
  ngOnInit() { 
    this.service.displayProfile().subscribe((Datas: DisplayStudentsProfile[])=>{  
      // this.stringifiedStudentData = JSON.stringify(data);
      // this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) 
      // console.log(this.parsedStudentJson);
      // console.log(data);
      this.students = Datas;  
      // console.log(this.students);
    } ) 
  } 

  //  delete(id){
  //   // alert(id); 
  //     this.service.deleteData(id).subscribe(data=>{console.log("success"),data
  //     });
  //   }

    logout(){
      sessionStorage.removeItem(this.sessinEmail);
      this.router.navigate(['/admin-page']);
    }  

  }  