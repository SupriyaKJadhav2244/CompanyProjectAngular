import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateClass } from '../models/update-class';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  update_url:string="http://localhost/companyProjectPhpFiles/updateData.php"; 
  // update_url:string="https://angularfirstproject.000webhostapp.com/PhpFiles/updateData.php";
  // update_url="https://recruitmentsiteangular.000webhostapp.com/updateData.php";
  // update_url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/updateData.php";

  constructor(private http:HttpClient) { }

  updateData(students){  
    // console.log(students);
    return this.http.put(this.update_url,students
      // ,{responseType:'json'}
      );
    
  } 
}
