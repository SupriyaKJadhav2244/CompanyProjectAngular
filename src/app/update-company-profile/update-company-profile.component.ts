import { Component, OnInit } from '@angular/core';
import { UpdateCompanyService } from '../servicrs/update-company.service';
import { UpdateCompany } from '../models/update-company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company-profile',
  templateUrl: './update-company-profile.component.html',
  styleUrls: ['./update-company-profile.component.css']
})
export class UpdateCompanyProfileComponent implements OnInit {

  updateCompany = new UpdateCompany();
  sessinEmail = sessionStorage.getItem('sessionAdminEmail');

  constructor(private service:UpdateCompanyService,private router: Router) { }

  ngOnInit() { 
  }

  updateCompanyData(){
    this.service.updateCompanyDetails(this.updateCompany).subscribe(data=>{console.log("success"),data})
  }

  logout(){
    sessionStorage.removeItem(this.sessinEmail);
    this.router.navigate(['/admin-page'])
  }  

}
