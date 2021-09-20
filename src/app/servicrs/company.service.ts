import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateCompany } from '../models/update-company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url="http://localhost/companyProjectPhpFiles/companyProfileUpdate.php/?id=";
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/companyProfileUpdate.php/?id=";
  // url="https://recruitmentsiteangular.000webhostapp.com/companyProfileUpdate.php/?id=";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/companyProfileUpdate.php/?id=";

  updateUrl = "http://localhost/companyProjectPhpFiles/updatePerticularCompany.php";
  // updateUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/updatePerticularCompany.php";
  // updateUrl="https://recruitmentsiteangular.000webhostapp.com/updatePerticularCompany.php";
  // updateUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/updatePerticularCompany.php";

  applyCompanyUrl = "http://localhost/companyProjectPhpFiles/CompanyinsertData.php";
  // applyCompanyUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/CompanyinsertData.php";
  // applyCompanyUrl="https://recruitmentsiteangular.000webhostapp.com/CompanyinsertData.php";
  // applyCompanyUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/CompanyinsertData.php";

  constructor(private http:HttpClient) { }

  getPerticularCompany(id:number){
    // alert(id);
    return this.http.get(this.url+id);
  }
   
  updatePerticularCompany(updateCompany:UpdateCompany){
    // console.log(updateCompany);
    return this.http.put(this.updateUrl,updateCompany
      // ,{responseType:'json'}
      );
  }

  applyCompany(CompanyName){
    // console.log(CompanyName);
    return this.http.post(this.applyCompanyUrl,CompanyName
      // ,{responseType:'json'}
      ); 
  }
} 