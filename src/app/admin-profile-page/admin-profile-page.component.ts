import { Component, OnInit } from '@angular/core'; 
import { AdminInfo } from '../models/admin-info';
import { Router } from '@angular/router'; 
import { AdminprofileService } from '../servicrs/adminprofile.service'; 
import { AdminProfile } from '../models/admin-profile';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.css']
})
export class AdminProfilePageComponent implements OnInit { 
  
  stringifiedStudentData: any;  
  Email;

  constructor(private service:AdminprofileService,private router:Router) 
  {
    this.Email = sessionStorage.getItem('sessionAdminEmail'); 
  }  

  parsedStudentJson: AdminProfile =  { 
    Id : "",
    Name : "",
    Email : "",
    ContactNo : "",
    Occupation : ""
 };

  adminInfo = new AdminInfo();
  adminInfos: AdminInfo[];

  adminData:any={};
  
  ngOnInit() { 
    // alert(this.Email); 
    // console.log(this.Email);
    this.service.getAdminStudentProfileData(this.Email).subscribe((data)=>{ 
      //  console.log(data);
      this.stringifiedStudentData = JSON.stringify(data);
      this.parsedStudentJson = JSON.parse(this.stringifiedStudentData) ;
      // console.log(this.parsedStudentJson);
      if(this.parsedStudentJson.Email != null && this.parsedStudentJson.ContactNo != null) { 
        // console.log(this.parsedStudentJson.Email);  
      }
      else{
        alert("Admin Profile Data Not Available.")   
      }   
    }) 
  }

  deleteAdmin(Id){    
    // console.log(Id);
    this.service.deleteAdminData(Id).subscribe(data=>{console.log("success",data)});
  }

    logout(){
      sessionStorage.removeItem(this.Email);
      this.router.navigate(['/admin-page']);
    }  

 } 
  