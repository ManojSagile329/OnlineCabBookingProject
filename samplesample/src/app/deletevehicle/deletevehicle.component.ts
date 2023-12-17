import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deletevehicle',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './deletevehicle.component.html',
  styleUrl: './deletevehicle.component.css',
  providers:[RideService]
})
export class DeletevehicleComponent {
  vehicleId:any
  constructor(private service:RideService,private router:Router){}


  onDelete() {
    
    if(this.vehicleId==null)
    {
      alert('Please fill required field ')
    }
    // Assuming you have a method in your service to delete a vehicle
    this.service.deleteVehicle(this.vehicleId).subscribe(
      (response) => {
        console.log('Deleted successfully', response);
        alert('Deleted successfully');
        this.router.navigate(['/viewvehicles']);
        // You can perform additional actions after successful deletion if needed
      },
      (error) => {
        console.error('Deletion failed', error);
        alert('Deletion failed');
      }
    );
  }
}
