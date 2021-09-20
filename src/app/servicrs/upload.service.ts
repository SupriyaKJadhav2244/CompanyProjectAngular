import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UploadService { 
  // userEmail:String;
  SERVER_URL: string = "http://localhost/companyProjectPhpFiles/resumeInsertData.php";
  // SERVER_URL = "https://angularfirstproject.000webhostapp.com/PhpFiles/resumeInsertData.php";
  // SERVER_URL="https://recruitmentsiteangular.000webhostapp.com/resumeInsertData.php";
  // SERVER_URL="https://myfirstangulardeployingproject.000webhostapp.com/PhpFiles/resumeInsertData.php";
  
  constructor(private httpClient: HttpClient) { 
  }  
  

  public uploadFile(data) { 
    // for (var pair of data.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // } 
    let uploadURL = this.SERVER_URL;
    return this.httpClient.post(uploadURL, data
      // ,{responseType:'json'}
      );
  }
}
