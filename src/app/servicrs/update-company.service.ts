import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateCompany } from '../models/update-company';

@Injectable({
  providedIn: 'root'
})
export class UpdateCompanyService {

  url = "http://localhost/companyProjectPhpFiles/updateCompanyData.php";
  // url = "https://angularfirstproject.000webhostapp.com/PhpFiles/updateCompanyData.php";
  // url="https://recruitmentsiteangular.000webhostapp.com/updateCompanyData.php";
  // url="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/updateCompanyData.php";

  getUrl = "http://localhost/companyProject/fetchCompanyData.php/?";
  // getUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/fetchCompanyData.php/?";
  // getUrl="https://recruitmentsiteangular.000webhostapp.com/fetchCompanyData.php";
  // getUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/fetchCompanyData.php";

  updateUrl = "http://localhost/companyProject/getStudentsAdminData.php";
  // updateUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/getStudentsAdminData.php";
  // updateUrl="https://recruitmentsiteangular.000webhostapp.com/getStudentsAdminData.php";
  // updateUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/getStudentsAdminData.php";

  getAdminDataUrl = "http://localhost/companyProjectPhpFiles/getAdminProfileDataById.php/?id=";
  // getAdminDataUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/getAdminProfileDataById.php/?id=";
  // getAdminDataUrl="https://recruitmentsiteangular.000webhostapp.com/getAdminProfileDataById.php/?id=";
  // getAdminDataUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/getAdminProfileDataById.php/?id=";

  updateAdminUrl = "http://localhost/companyProjectPhpFiles/updateAdminProfile.php";
  // updateAdminUrl = "https://angularfirstproject.000webhostapp.com/PhpFiles/updateAdminProfile.php";
  // updateAdminUrl="https://recruitmentsiteangular.000webhostapp.com/updateAdminProfile.php";
  // updateAdminUrl="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/updateAdminProfile.php";

  constructor(private http:HttpClient) { }

  updateCompanyDetails(updateCompany:UpdateCompany){
    return this.http.post(this.url,updateCompany)
  } 
  
  updateDetail(update:UpdateCompany){
    return this.http.put(this.updateUrl,update)  
  }

  getAdminProfile(id){
    // console.log(id);
    return this.http.get(this.getAdminDataUrl+`${id}`);
  }

  updateAdminProfile(adminForm){
    // console.log(adminForm);
    return this.http.put(this.updateAdminUrl,adminForm)
  }

}
