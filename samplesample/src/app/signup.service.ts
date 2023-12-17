import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SIgnupService {

  // private signupUrl = 'http://localhost:5096/api/Customers'; // API endpoint URL

  private signupUrl = 'https://maincabbooking20231217191323.azurewebsites.net/api/Customers'; 
 
  constructor(private httpClient: HttpClient) {}
 
  signup(signupData: any): Observable<any> {
    return this.httpClient.post<any>(this.signupUrl, signupData);
  }
}

