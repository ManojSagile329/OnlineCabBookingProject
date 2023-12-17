import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CustomerstartComponent } from '../customerstart/customerstart.component';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-customerlogin',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule,CustomerstartComponent],
  templateUrl: './customerlogin.component.html',
  styleUrl: './customerlogin.component.css',
  providers:[AuthService]
})
export class CustomerloginComponent {
  arr:any
  username:any
  password:any
  userName:any
 mouseoverLogin:boolean=true;
 custarr:any
 name:any
 custid:any

  constructor(private router:Router,private service:AuthService)
  {
    this.service.getCustomers().subscribe(cust=> this.custarr=cust)
  }

  login(formvalues:any)
  {
    if(formvalues.userName==null || formvalues.password==null)
    {
      alert('please fill all the fields')
    }

    let j = 0;

  for (let i = 0; i < this.custarr.length; i++) {
    if (
      formvalues.userName === this.custarr[i].username && formvalues.password === this.custarr[i].password) 
      {
      alert('Login successful');
      console.log('Login successful');
      this.custid=i+1

      console.log('cust id',this.custid)
      
      this.service.custid=this.custid
      j = 1;
      this.router.navigate(['confirm']);
      this.service.setVariable(this.custid)
      console.log('This value is get from service',this.service.getVariable())
      break;
    }
  }

  if (j !== 1) {
    alert('Invalid Username or password');
    console.log('Invalid Details');
  }
    
    
  }
}
