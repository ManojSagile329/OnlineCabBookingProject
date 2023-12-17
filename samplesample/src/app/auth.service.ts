// auth.service.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICust } from './customer.model';
import { Observable } from 'rxjs';
import { ISignUp } from './signuppage/custsignup.model';
import { IAdmin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  custarray:any
  custid:any
  constructor(private httpClient:HttpClient)
  {

  }

  // http://localhost:5096/api/AdminLogins   
  getVariable():any{
    return this.custid
  }
  setVariable(value:any){
    this.custid=value
  }
  // getAdmin():Observable<IAdmin[]> {
  //   return this.httpClient.get<IAdmin[]>('http://localhost:5096/api/AdminLogins')
  // }



  getAdmin():Observable<IAdmin[]> {
    return this.httpClient.get<IAdmin[]>(' https://maincabbooking20231217191323.azurewebsites.net/api/AdminLogins')
  }
  

  // getCustomers():Observable<ICust[]> {
  //   return this.httpClient.get<ICust[]>('http://localhost:5096/api/Customers')
  // }

  getCustomers():Observable<ICust[]> {
    return this.httpClient.get<ICust[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Customers')
  }

  
  // PostCustomer(cust:ISignUp) {
  //   let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  //   return this.httpClient.post<ISignUp>('http://localhost:5096/api/Customers', cust, options)
    
  // }
  

  PostCustomer(cust:ISignUp) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post<ISignUp>('https://maincabbooking20231217191323.azurewebsites.net/api/Customers', cust, options)
    
  }

  // signup(signupData: any): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:5096/api/Customers', signupData);
  // }

  signup(signupData: any): Observable<any> {
    return this.httpClient.post<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Customers', signupData);
  }
  
}

