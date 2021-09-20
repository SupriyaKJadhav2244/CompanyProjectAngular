import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../servicrs/admin-service.service';
import { AdminInfo } from '../models/admin-info';

@Component({
  selector: 'app-admin-home-pge',
  templateUrl: './admin-home-pge.component.html',
  styleUrls: ['./admin-home-pge.component.css']
})
export class AdminHomePgeComponent implements OnInit {

  constructor(private router: Router) { }

  
  sessinEmail = sessionStorage.getItem('sessionAdminEmail');
  userNames = sessionStorage.getItem('sessionAdminName');

  ngOnInit() { 
  } 

  logout(){
      sessionStorage.removeItem(this.sessinEmail);
      this.router.navigate(['/admin-page'])
    }

}
