import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateCompany } from '../models/update-company';

@Injectable({
  providedIn: 'root'
})
export class DisplayCompanyProfileService {

  url = "http://localhost/companyProjectPhpFiles/displayCompnyData.php";
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/displayCompnyData.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/displayCompnyData.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/displayCompnyData.php";

  deleteUrl = "http://localhost/companyProjectPhpFiles/deleteCompanyProfile.php/?id=";
  // deleteUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/deleteCompanyProfile.php/?id=";
  // deleteUrl="https://recruitmentsiteangular.000webhostapp.com/deleteCompanyProfile.php/?id=";
  // deleteUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/deleteCompanyProfile.php/?id=";

  applyUrl = "http://localhost/companyProjectPhpFiles/studentAppyCompany.php";
  // applyUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/studentAppyCompany.php";
  // applyUrl="https://recruitmentsiteangular.000webhostapp.com/studentAppyCompany.php";
  // applyUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/studentAppyCompany.php";

  constructor(private http:HttpClient) { } 

  displayCompanyData(){
    return this.http.get(this.url)
  }

  deleteCompany(id:number){
    // console.log(id);
    return this.http.delete(this.deleteUrl+`${id}`
    // ,{responseType:'json'}
    );
  }

  applyCompany(company){
    console.log(company);  
    return this.http.put(this.applyUrl,company
      // ,{responseType:'json'}
      )
  }
}  
