import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifyvehicle',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './modifyvehicle.component.html',
  styleUrl: './modifyvehicle.component.css',
  providers:[RideService]
})
export class ModifyvehicleComponent {

  vehicleId: any
  vehicleName: any
  vehicleType: any
  capacity: any
  farePerKm: any
  availability: any

  constructor(private service:RideService,private router:Router){}

  onSubmit() 
  {

    if(this.vehicleId==null || this.vehicleName==null || this.vehicleType==null || this.capacity==null || this.farePerKm==null)
    {
      alert('Please fill all the  fields')
    }
    const updatedData = {
      vehicleId: this.vehicleId,
      vehicleName: this.vehicleName,
      vehicleType: this.vehicleType,
      capacity: this.capacity,
      farePerKm:this.farePerKm,
      availability:true
    };
   
    this.service.PutVehicle(this.vehicleId, updatedData).subscribe(
      (response) => {
        console.log('Updated successfully', response);
        alert('Updated successfully');
        this.router.navigate(['/viewvehicles']);
        
      },
      (error) => {
        console.error('Update failed', error);
        alert('Update failed');
      }
    );
  }
}
