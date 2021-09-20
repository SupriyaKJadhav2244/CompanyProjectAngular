import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiServiceService } from '../servicrs/regi-service.service';
import { RegiClass } from '../models/regi';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router, private service:RegiServiceService) { }

  studentData = new RegiClass(); 
 
  ngOnInit() {
  }

  onSubmit(){ 
    console.log(this.studentData);
    this.service.postData(this.studentData)
    .subscribe(data=>{console.log("success",data),
      alert("Your Registration Is Successfully Done");}) 
      this.router.navigate(['/login-page'])
  } 
}

   