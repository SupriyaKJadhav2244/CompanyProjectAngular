import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }
  userEmail;
   
  userNames = sessionStorage.getItem('sessionEmail');

  ngOnInit() {
  } 
  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.userNames);
    this.route.navigate(['/login-page']);
  }

}
