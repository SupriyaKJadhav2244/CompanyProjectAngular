import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegiClass } from '../models/regi';
 
@Injectable({
  providedIn: 'root'
})
export class RegiServiceService {

  url="http://localhost/companyProjectPhpFiles/insertData.php";
  // url="https://angularfirstpnroject.000webhostapp.com/PhpFiles/insertData.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/insertData.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/insertData.php";
  
  constructor(public hhtpC: HttpClient) { }

  postData(student:any){ 
    // console.log(student);
    return this.hhtpC.post(this.url, student
      // ,{responseType:'json'}
      )
  }
}
