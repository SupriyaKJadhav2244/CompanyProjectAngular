import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../servicrs/login-service.service';
import { IoginClass } from '../models/iogin-class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  students = new IoginClass();

  constructor(private router:Router,private service:LoginServiceService) { }

  ngOnInit() {
  }

  stringifiedData: any;  
  parsedJson: any; 
 
  onClicks(){ 
    // console.log(this.students);
    if(this.students.email!=null && this.students.cmobile!=null) { 
        this.service.loginData(this.students)
          .subscribe(data=>{ 
            // console.log(data);
          this.stringifiedData = JSON.stringify(data);
          this.parsedJson = JSON.parse(this.stringifiedData)
          alert(this.parsedJson.Email); 
          if(this.parsedJson.Email == this.students.email && this.parsedJson.Contact == this.students.cmobile) {
            sessionStorage.setItem('sessionEmail', this.parsedJson.Email);
            sessionStorage.setItem('sessionName', this.parsedJson.FullName);
            this.router.navigate(['/home-page'])
          }  
          else{
            alert("Please enter valid data.")
          }   
        })    
       }
       else{
         alert("Please enter data.")
       }  
  } 
}
