import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { ICust } from '../customer.model';
import { HttpClientModule } from '@angular/common/http';
import { ISignUp } from './custsignup.model';
import { SIgnupService } from '../signup.service';

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css',
  providers:[SIgnupService,AuthService]
})
export class SignuppageComponent {

  
  customerName:any
  gender:any
  contactNumber:any
  email:any
  username:any
  password:any
  custarr:any
  mouseoverLogin:boolean=true;

  constructor(private signupService: SIgnupService, private router: Router,private serv:AuthService) 
  {
    this.serv.getCustomers().subscribe(cust=> this.custarr=cust)
  }
 
  onSubmit() {


    if(this.contactNumber<6000000000 || this.contactNumber>9999999999  )
      {
        alert('Invaild Mobile Number')
        this.contactNumber=0
        
      }

      
    for (let i = 0; i < this.custarr.length; i++)
    {
      if(this.email==this.custarr[i].email)
      {
        alert('This email id already exist ')
        this.email=""
      }
      
      if(this.username==this.custarr[i].username)
      {
        alert('User name is already exist ')
        this.username=""
      }
      
      
    }



    const signupData = {
      
      customerName: this.customerName,
      gender:this.gender,
      contactNumber:this.contactNumber,
      email:this.email,
      username:this.username,
      password: this.password,
      
      
    };
 
    this.signupService.signup(signupData).subscribe(
      (response) => {
        console.log('Signup successful', response);
        alert('Signup successful');
        this.router.navigate(['/cust']);
        // this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Signup failed', error);
        alert('Signup failed');
      }
    );
  }
}
