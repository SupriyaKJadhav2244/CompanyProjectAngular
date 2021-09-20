import { Component, OnInit } from '@angular/core';
import { DisplayCompanyProfileService } from '../servicrs/display-company-profile.service';
import { UpdateCompany } from '../models/update-company';
import { Router } from '@angular/router';
import { UpdateCompanyService } from '../servicrs/update-company.service';

@Component({
  selector: 'app-display-company-profile',  
  templateUrl: './display-company-profile.component.html',
  styleUrls: ['./display-company-profile.component.css']
})
export class DisplayCompanyProfileComponent implements OnInit {

  updateCompany : UpdateCompany[];  
  sessinEmail = sessionStorage.getItem('sessionAdminEmail');
  id: any;

  constructor(private service:DisplayCompanyProfileService,private router: Router,private services:UpdateCompanyService) { }

  ngOnInit() {
    this.service.displayCompanyData().subscribe((updateCompany : UpdateCompany[])=>{
      this.updateCompany=updateCompany;
      // console.log(this.updateCompany);
    }) 
  } 

  deleteCompanyProfile(id){
    // console.log(id);
    this.service.deleteCompany(id).subscribe(data=>{console.log("Success"),data});
  }

  
  logout(){
    sessionStorage.removeItem(this.sessinEmail);
    this.router.navigate(['/admin-page'])
  } 

}
