import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AdminInfo } from '../models/admin-info';

@Injectable({
  providedIn: 'root'
})
export class AdminprofileService {

  url:string="http://localhost/companyProjectPhpFiles/adminProfilePage.php";  
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/adminProfilePage.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/adminProfilePage.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/adminProfilePage.php";

  deleteAdminUrl = "http://localhost/companyProjectPhpFiles/deleteAdminProfile.php/?id=";
  // deleteAdminUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/deleteAdminProfile.php/?id=";
  // deleteAdminUrl="https://recruitmentsiteangular.000webhostapp.com/deleteAdminProfile.php/?id=";
  // deleteAdminUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/deleteAdminProfile.php/?id=";

  constructor(private http:HttpClient) { }  

  getAdminStudentProfileData(data:string){
    // alert(Email);  
    const emailPassed = {Email: data};  
    return this.http.post(this.url,emailPassed);  
  }

  deleteAdminData(Id){
    // console.log(Id);
    return this.http.delete(this.deleteAdminUrl+`${Id}`
    // ,{responseType:'json'}
    );
  }
} 