import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IVehicls } from '../vehicles.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cablist',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './cablist.component.html',
  styleUrl: './cablist.component.css',
  providers:[RideService]
})
export class CablistComponent {

  vehicles: any;
  images: any[] = [];
  constructor(private service: RideService, private router: Router) {}

  ngOnInit(): void {
    this.service.getVehicles().subscribe(vehicle => this.vehicles = vehicle);
  }

  viewVehicleDetails(vehicleId: any): void {
    this.router.navigate(['/cabb', vehicleId]);
  }

  
}
