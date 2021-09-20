import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IoginClass } from '../models/iogin-class';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  // url:string="https://angularfirstproject.000webhostapp.com/PhpFiles/logIn.php";
  url:string="http://localhost/companyProjectPhpFiles/logIn.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/logIn.php"; 
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/logIn.php";

  constructor(private http:HttpClient) { }

  loginData(data:any){
    // console.log(data);
    return this.http.post(this.url,data
      // ,{responseType: 'json'} 
    ); 
  }    
}
