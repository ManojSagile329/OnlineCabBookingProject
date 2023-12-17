
 
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule,HttpClientModule],

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {
//=========================================================================================================
  userName:any
  password:any
  adminarr:any
  mouseoverLogin:boolean=true;
  
  constructor(private router:Router,private service:AuthService)
  {
    this.service.getAdmin().subscribe(data=> this.adminarr=data)
  }
  
  login(formvalues:any)
  {
    if(formvalues.userName==null || formvalues.password==null)
    {
      alert('please fill all the fields')
    }

    let j = 0;

  for (let i = 0; i < this.adminarr.length; i++) {
    if (
      formvalues.userName === this.adminarr[i].username && formvalues.password === this.adminarr[i].password) 
    {
      alert('Login successful');
      console.log('Login successful');
      j = 1;
      this.router.navigate(['/view']);
      break;
    }
  }

  if (j !== 1) 
  {
    alert('Invalid username or password');
    console.log('Invalid Details');
  }
  
  
}
cancel() {
  this.router.navigate(['home'])
}
}

