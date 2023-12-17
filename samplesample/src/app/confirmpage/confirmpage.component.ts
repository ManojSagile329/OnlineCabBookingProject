import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IVehicls } from '../vehicles.model';
import { RideService } from '../ride.service';
import { PathsService } from '../paths.service';
import { IPaths } from '../paths.model';
import { AuthService } from '../auth.service';
import { emit } from 'process';

@Component({
  selector: 'app-confirmpage',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule,HttpClientModule],
  templateUrl: './confirmpage.component.html',
  styleUrl: './confirmpage.component.css',
  providers:[PathsService,AuthService,RideService]
})
export class ConfirmpageComponent implements OnInit 
{

  source:any
  destination:any
  sharedvar:any
  vehicleId:any
  vehicleName:any
  mouseoverLogin=true
  email:any
  password:any
  // vehiclesarray:any
  vehiclesarray: IVehicls[] | undefined
  rootsarray:any
  vehiclesarray1:any
  custarr:any

  routeId:any
  duration:any
  distance:any

  vehicleType:any
  farePerKm:any

  customerId:any
  customerName:any
  mobileNumber:any
  emailId:any
//   rootsarray: IPaths[] | undefined
// constructor(private service:PathsService,private router:Router,private serv:AuthService )
// {
//   this.service.getPaths().subscribe(paths=>this.rootsarray=paths)
// }
constructor(private service:RideService,private serv:PathsService,private servi:AuthService,private router:Router)
{
  this.service.getVehicles().subscribe(vehicles=>this.vehiclesarray=vehicles) 
  this.service.getVehicles().subscribe(vehicles=>this.vehiclesarray1=vehicles)
  this.serv.getPaths().subscribe(paths=>this.rootsarray=paths)
  this.servi.getCustomers().subscribe(cust=> this.custarr=cust)
}
  ngOnInit(): void {
   
    // this.sharedvar=this.serv.getVariable()
  }
Submit()
{
  // console.log('inside the method source ',this.source)
  // console.log('Inside The Method Destination',this.destination)
  // console.log('Inside the Method Vehicle Id ',this.vehicleName)
  // console.log('email',this.email)
  // console.log('password',this.password)

  for (let i=0; i<this.rootsarray.length; i++)
  {
    if(this.source==this.rootsarray[i].source && this.destination==this.rootsarray[i].destination)
    {
      this.routeId=i+1
      this.source=this.rootsarray[i].source
      this.destination=this.rootsarray[i].destination
      this.duration=this.rootsarray[i].duration
      this.distance=this.rootsarray[i].distance
    }
    else
    {
      alert('We are not providing cabs in those roots.Sorry for inconveinence')
    }
  }
  for (let i=0; i<this.vehiclesarray1.length; i++)
  {
    if(this.vehicleName==this.vehiclesarray1[i].vehicleName)
    {
      this.vehicleType=this.vehiclesarray1[i].vehicleType
      this.farePerKm=this.vehiclesarray1[i].farePerKm
      
    }
    else{
      alert('Ensure the Vehicle Name you entered in the list')
    }
  }
  let j = 0;
  for (let i = 0; i < this.custarr.length; i++) 
  {
    if (this.email === this.custarr[i].email && this.password === this.custarr[i].password) 
      {
        this. customerId=this.custarr[i].customerId
        this.customerName=this.custarr[i].customerName
        this.mobileNumber=this.custarr[i].contactNumber
        this.emailId=this.custarr[i].email

        console.log( this.emailId)
      // alert('We will inform to your Email');
      // console.log('We will inform to your Email');
      const Data =
      {
        customerId:this.customerId,
        customerName:this.customerName,
        mobileNumber:this.mobileNumber,
        emailId:this.emailId,
        source:this.source,
        destination:this.destination,
        duration:this.duration,
        distance:this.distance,
        vehicleName:this.vehicleName,
        vehicleType:this.vehicleType,
        farePerKm:this.farePerKm * this.distance  
      };
      this.serv.PostBooking(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          alert('Submitted successful');
          // this.router.navigate(['/pay']);
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
