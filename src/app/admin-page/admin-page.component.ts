import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../servicrs/admin-service.service';
import { Adminclass } from '../models/adminclass';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  adminData = new Adminclass();
  parsedJson: any;
  stringifiedData: any;

  constructor(private routes: Router, private adminService:AdminServiceService) { }

  ngOnInit() {
  }

  onClick(){ 
    if(this.adminData.email!=null && this.adminData.password!=null){
      this.adminService.adminlog(this.adminData).subscribe(data=>{ 
        this.stringifiedData = JSON.stringify(data);
        this.parsedJson = JSON.parse(this.stringifiedData);  
        // alert(this.parsedJson.Email);
        if(this.parsedJson.Email==this.adminData.email && this.parsedJson.Password==this.adminData.password){
          sessionStorage.setItem('sessionAdminEmail', this.parsedJson.Email);
          // sessionStorage.setItem('sessionAdminName', this.parsedJson.FullName);
          this.routes.navigate(['/admin-home-pge']);
        }else{
          alert("Please enter valid data.")
              }
            }
          ) 
        }   
      } 
    }
