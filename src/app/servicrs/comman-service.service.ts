import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentClass } from '../models/student-class';
import { RegiClass } from '../models/regi';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService { 
  url:string="http://localhost/companyProjectPhpFiles/getStudentProfileData.php"; 
  // url:string="https://angularfirstproject.000webhostapp.com/PhpFiles/getStudentProfileData.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/getStudentProfileData.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/getStudentProfileData.php";
  
  constructor(private http:HttpClient) { } 
  getStudentProfileData(data:String){ 
    const emailPassed = {email: data}; 
    return this.http.post(this.url,emailPassed);        
  }

  
}
