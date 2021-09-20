import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { DisplayStudentsProfile } from '../models/display-students-profile';

@Injectable({
  providedIn: 'root'
})
export class DisplayStudentsProfileService {  

  url = "http://localhost/companyProjectPhpFiles/displayStudentsProfile.php"; 
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/displayStudentsProfile.php"; 
  // url="https://recruitmentsiteangular.000webhostapp.com/displayStudentsProfile.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/displayStudentsProfile.php";

  getUrl: string="http://localhost/companyProjectPhpFiles/getStudentProfileDataById.php/?id=";
  // getUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/getStudentProfileDataById.php/?id=";
  // getUrl="https://recruitmentsiteangular.000webhostapp.com/getStudentProfileDataById.php/?id=";
  // getUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/getStudentProfileDataById.php/?id=";

  deleteUrl = "http://localhost/companyProjectPhpFiles/adminStudentDeleteProfile.php/?id=";
  // deleteUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/adminStudentDeleteProfile.php/?id=";
  // deleteUrl="https://recruitmentsiteangular.000webhostapp.com/adminStudentDeleteProfile.php/?id=";
  // deleteUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/adminStudentDeleteProfile.php/?id=";

  updateData = "http://localhost/companyProjectPhpFiles/adminStudentProfileUpdate.php";
  // updateData = "https://angularfirstproject.000webhostapp.com/PhpFiles/adminStudentProfileUpdate.php";
  // updateData="https://recruitmentsiteangular.000webhostapp.com/adminStudentProfileUpdate.php";
  // updateData="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/adminStudentProfileUpdate.php";

  companyUrl = "http://localhost/companyProjectPhpFiles/getCompanyData.php/?id=";
  // companyUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/getCompanyData.php/?id=";
  // companyUrl="https://recruitmentsiteangular.000webhostapp.com/getCompanyData.php/?id=";
  // companyUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/getCompanyData.php/?id=";

  ApplyUrl = "http://localhost/companyProjectPhpFiles/applyCompany.php";
  // ApplyUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/applyCompany.php";
  // ApplyUrl="https://recruitmentsiteangular.000webhostapp.com/applyCompany.php";
  // ApplyUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/applyCompany.php";

  constructor(private http:HttpClient) { }   

  displayProfile(){
    return this.http.get(this.url)
  } 

  getPerticularStudent(id:number){ 
    return this.http.get(this.getUrl+`${id}`);
  }  

  updateStudentData(studentData:DisplayStudentsProfile){
    return this.http.put(this.updateData,studentData
      // ,{responseType:'json'}
      )
  }

  deleteData(id){ 
    // console.log(id);
    return this.http.delete(this.deleteUrl+`${id}`
    // ,{responseType:'json'}
    );
  } 

  getCompanyData(id){
    // console.log(id);
    return this.http.get(this.companyUrl+`${id}`);
  }

  applyResume(company){
    console.log(company);
    return this.http.put(this.ApplyUrl,company
      // ,{responseType:'json'}
      );
  }

}
