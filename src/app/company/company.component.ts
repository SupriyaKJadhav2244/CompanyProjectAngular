import { Component, OnInit } from '@angular/core';
import { UpdateCompanyService } from '../servicrs/update-company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateCompany } from '../models/update-company';
import { CompanyService } from '../servicrs/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  updateCompany = new UpdateCompany();
  id: any;
  studentDatas: any = {};
  constructor(private route: ActivatedRoute,private service:UpdateCompanyService,private services:CompanyService, private router:Router) { }
  sessinEmail = sessionStorage.getItem('sessionAdminEmail');
  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['id'];  
      this.services.getPerticularCompany(this.id).subscribe(row => {
        this.studentDatas = row;  
        // console.log(this.studentDatas);   
    });
  });   
  }     
  
  updateCmpanyProfile() { 
    // console.log(this.studentDatas);
    this.services.updatePerticularCompany(this.studentDatas)
    .subscribe(data=>{console.log("Success Message"),data});
    this.router.navigate(['/display-company-profile']);
}

logout(){
  sessionStorage.removeItem(this.sessinEmail);
  this.router.navigate(['/admin-page'])
}
}  
