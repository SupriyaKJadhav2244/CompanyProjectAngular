import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adminclass } from '../models/adminclass';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url:string = "http://localhost/companyProjectPhpFiles/adminLogin.php/?";
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/adminLogin.php/?";
  // url="https://recruitmentsiteangular.000webhostapp.com/adminLogin.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/adminLogin.php";

  constructor(private http: HttpClient) { }

  adminlog(Email){
    return this.http.post(this.url,Email) 
  }

}
