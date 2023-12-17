import { Component } from '@angular/core';
import { IBooking } from '../Booking.model';
import { PathsService } from '../paths.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RideService } from '../ride.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookingdetails',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './bookingdetails.component.html',
  styleUrl: './bookingdetails.component.css',
  providers:[PathsService,RideService,AuthService]
})
export class BookingdetailsComponent {

  // booking:IBooking[] | undefined
  // constructor(private service:PathsService)
  // {
  //   this.service.getBooking().subscribe(data =>this.booking=data)
  // }

  source:any
  destination:any
  email:any
  password:any
rootsarray:any
  vehicleId: any;

  routeId:any
  duration:any
  distance:any

  bookingId:any

    customerId: any
    customerName:any
    mobileNumber:any
    emailId:any
    // bookingDate:
    
    vehicleName: any
    vehicleType: any
    farePerKm: any

    vehicles:any
    custarray:any

  constructor(
    private service: RideService,
    private router: Router,
    private route: ActivatedRoute,
    private serv:PathsService,
    private servi:AuthService
  ) { 
    this.serv.getPaths().subscribe(paths=>this.rootsarray=paths)
    this.service.getVehicles().subscribe(vehicle=>this.vehicles=vehicle)
    this.servi.getCustomers().subscribe(cust=>this.custarray=cust)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      if (this.vehicleId) {
        // this.fetchVehicleDetails(this.vehicleId);
      }
    });
  }
book(Formvalues:any)
{
  console.log(Formvalues.email)
  console.log(Formvalues.password)
  console.log(this.source)
  console.log(this.destination)
  console.log(this.vehicleId)
  for (let i = 0; i < this.rootsarray.length; i++)
  {
    if(this.source==this.rootsarray[i].source && this.destination==this.rootsarray[i].destination)
    {
      this.routeId=this.rootsarray[i].routeId
      this.duration=this.rootsarray[i].duration
      this.distance=this.rootsarray[i].distance

      console.log('inside loop rootes',this.routeId)
      console.log(this.duration)
      console.log(this.distance)
    
    }
  }

  for (let i = 0; i < this.vehicles.length; i++)
  {
    if(this.vehicleId==this.vehicles[i].vehicleId)
    {
      this.vehicleName=this.vehicles[i].vehicleName
      this.vehicleType=this.vehicles[i].vehicleType
      this.farePerKm=this.vehicles[i].farePerKm

      console.log(this.vehicleName)
      console.log(this.vehicleType)
      console.log(this.farePerKm)

    }
  }
let j=0
  for (let i = 0; i < this.custarray.length; i++)
  {

    if(Formvalues.email==this.custarray[i].email && Formvalues.password==this.custarray[i].password)
    {
      this.customerId=this.custarray[i].customerId
      this.customerName=this.custarray[i].customerName
      this.mobileNumber=this.custarray[i].contactNumber
      this.emailId=this.custarray[i].email

      j=1
      console.log(this.customerId)

      console.log(this.customerName)

      console.log(this.mobileNumber)

      console.log(this.emailId)
      break

    }
  }
  if(j!=1)
  {
    alert('Invalid email id or password')
  }

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
        vehicleName: this. vehicleName,
        vehicleType: this.vehicleType,
        farePerKm: this.farePerKm * this.distance,
      };
      this.serv.PostBooking(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          
          this.router.navigate(['/pay']);
          alert('Cab was Booked Successfully ')
        },
        (error) =>
        {
          console.error('Submission failed', error);
          alert('Submission failed');
        }
      );

 
}
Cancel()
{
  this.router.navigate(['/confirm']);
}

}
