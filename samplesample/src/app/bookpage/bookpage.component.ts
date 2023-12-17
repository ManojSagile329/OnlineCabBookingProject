import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RideService } from '../ride.service';
import { Interface } from 'node:readline';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Vehicle
{
  vehicleId: number,
  vehicleName: string,
  vehicleType: string,
  capacity: string,
  farePerKm: 0,
  availability: true
}

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css',
  providers:[RideService]
})
export class BookpageComponent {
  vehicleId: any;
  vehicle: Vehicle = {} as Vehicle; // Initialize an empty product object

  constructor(
    private service: RideService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      if (this.vehicleId) {
        this.fetchVehicleDetails(this.vehicleId);
      }
    });
  }

  fetchVehicleDetails(vehicleId: any): void {
    this.service.getVehcileById(vehicleId).subscribe(
      (vehicle: Vehicle) => {
        this.vehicle = vehicle; // Assign fetched product to the local 'product' object
      },
      error => {
        console.error('Error fetching vehicle details:', error);
      }
    );
  }
  Book(): void {
    // console.log(this.productId);
    this.router.navigate(['/details', this.vehicleId]);
  }
  
}
