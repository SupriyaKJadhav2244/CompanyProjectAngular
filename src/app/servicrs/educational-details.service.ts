import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegiClass } from '../models/regi';
 

@Injectable({
  providedIn: 'root'
})
export class EducationalDetailsService {

  url:string="http://localhost/companyProjectPhpFiles/studentEducationalDetails.php";
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/studentEducationalDetails.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/studentEducationalDetails.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/studentEducationalDetails.php";

  constructor(private http:HttpClient) { } 

  updateEducationalData(students:RegiClass){  
    return this.http.put(this.url,students)
  }
} 