import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AdminInfo } from '../models/admin-info';
import { UpdateCompanyService } from '../servicrs/update-company.service';

@Component({
  selector: 'app-adminprofileupdate',
  templateUrl: './adminprofileupdate.component.html',
  styleUrls: ['./adminprofileupdate.component.css']
})
export class AdminprofileupdateComponent implements OnInit {
  id: any; 
  userEmail: void;

  constructor(private service:UpdateCompanyService,private route: ActivatedRoute,private router:Router) { }

  sessinEmail = sessionStorage.getItem('sessionEmail');

  data: any =  {
    Id : "",
    FullName : "",
    Email : "",
    Password : "",
    ContactNo : "",
    Designation : "" 
 };


  ngOnInit() { 
    this.route.params.subscribe(params => { 
      this.id = params['Id']; 
      // console.log(this.id); 
      this.service.getAdminProfile(this.id).subscribe(row => {
        this.data = row;  
        // console.log(this.data);   
    });
  });   
  }

  updateAdminData(){
    // console.log(this.data);
    this.service.updateAdminProfile(this.data).subscribe(data=>{console.log("success"),data;
    alert("Data Updated Successfully")
    });
  }
  
  logout(){ 
    this.userEmail = sessionStorage.removeItem(this.sessinEmail);
    this.router.navigate(['/login-page']);
  }

}
