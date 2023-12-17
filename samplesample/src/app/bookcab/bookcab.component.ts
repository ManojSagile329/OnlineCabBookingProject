import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PathsService } from '../paths.service';

@Component({
  selector: 'app-bookcab',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './bookcab.component.html',
  styleUrl: './bookcab.component.css',
  providers:[AuthService,PathsService]
})
export class BookcabComponent 
{

  email:any
  password:any
  custarr:any
   custid:any
  customerid:any

  mouseoverLogin=true

  customerId:any
  customerName:any
  mobileNumber:any
  emailId:any
  
constructor(private service:AuthService,private router:Router,private serv:PathsService)
{
  this.service.getCustomers().subscribe(cust=> this.custarr=cust)
  // this.customerid=this.service.getVariable()
}

onSubmit(formvalues:any)
  {
   let j = 0;

  for (let i = 0; i < this.custarr.length; i++) 
  {
    if (formvalues.email === this.custarr[i].email && formvalues.password === this.custarr[i].password) 
      {
        this. customerId=this.custarr[i].customerId
        this.customerName=this.custarr[i].customerName
        this.mobileNumber=this.custarr[i].contactNumber
        this.emailId=this.custarr[i].email

        console.log('email id ',this.custid)
        console.log(this.customerId)
        console.log(this.customerName)
        console.log( this.mobileNumber)

        console.log( this.emailId)

      alert('We will inform to your Email');
      console.log('We will inform to your Email');

      const Data =
      {

        customerId:this.customerId,
        customerName:this.customerName,
        mobileNumber:this.mobileNumber,
        emailId:this.emailId
      };
      this.serv.PostBooking(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          alert('Submitted successful');
          this.router.navigate(['/pay']);
         
        },
        (error) =>
        {
          console.error('Submission failed', error);
          alert('Submission failed');
        }
      );
      j = 1;

      break;

    }

  }

  if (j !== 1) 
  {
    alert('Invalid Email Id or password');
    console.log('Invalid Email ID');
  }
}



}
