import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RideService } from '../ride.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IRide } from '../ride.model';
import { IVehicls } from '../vehicles.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-bookingconfirm',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './bookingconfirm.component.html',
  styleUrl: './bookingconfirm.component.css',
  providers:[RideService]
})
export class BookingconfirmComponent {
  vehiclesarray: IVehicls[] | undefined
constructor(private service:RideService)
{
  this.service.getVehicles().subscribe(vehicles=>this.vehiclesarray=vehicles) 
}
}

