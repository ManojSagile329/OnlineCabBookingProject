import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { IVehicls } from '../vehicles.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewvehicle',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './viewvehicle.component.html',
  styleUrl: './viewvehicle.component.css',
  providers:[RideService]
})
export class ViewvehicleComponent {
//   vehiclesarray: IVehicls[] | undefined

vehiclesarray:any
constructor(private service:RideService)
{
  this.service.getVehicles().subscribe(vehicles=>this.vehiclesarray=vehicles) 
}
}
