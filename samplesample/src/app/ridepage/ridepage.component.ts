import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RideService } from '../ride.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingconfirmComponent } from '../bookingconfirm/bookingconfirm.component';
import { IRide } from '../ride.model';
import { IVehicls } from '../vehicles.model';

@Component({
  selector: 'app-ridepage',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule,CommonModule,BookingconfirmComponent],
  templateUrl: './ridepage.component.html',
  styleUrl: './ridepage.component.css',
  providers:[RideService]
})
export class RidepageComponent implements OnInit{
  start:any
  dest:any

  rootsarray :any
  veharray:any
  custarray:any

  vehicleId: any
  vehicleName: any
  customerId: any
  customerName: any
  routeId: any
  source: any
  destination: any
  distance: any
  duration: any
  farePerKm: any
  
  constructor(private service:RideService)
  {

    // this.service.getVehcileById(this.vehicleId).subscribe(
    //   (data)=>{
    //     this.veharray=data
    //   },
    //   (error) =>
    //   {
    //     console.error('Error fetching vehicle details',error)
    //   }
    // );
    // this.service.getRouteById(this.routeId).subscribe(
    //   (data)=>{
    //     this.rootsarray=data
    //   },
    //   (error) =>
    //   {
    //     console.error('Error fetching Route details',error)
    //   }
    // );
    // this.service.getCustById(this.customerId).subscribe(
    //   (data)=>{
    //     this.custarray=data
    //   },
    //   (error) =>
    //   {
    //     console.error('Error fetching Customer details',error)
    //   }
    // );

  }
  ngOnInit(): void 
  {
    
  }
  ride(formvalues:any)
  {

  }
}

