import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
@Component({
  selector: 'app-addvehicle',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule],
  templateUrl: './addvehicle.component.html',
  styleUrl: './addvehicle.component.css',
  providers:[RideService]
})
export class AddvehicleComponent {
  vehicleName:any
  vehicleType:any
  capacity:any
  farePerKm:any
  availability:any
 
 
  constructor(private service:RideService,private router:Router)
  {

  }
    onSubmit()
    {
     
      if(this.vehicleName==null || this.vehicleType==null || this.capacity==null || this.farePerKm==null)
    {
      alert('Please fill all the  fields')
    }
      const Data =
      {
        vehicleName: this. vehicleName,
        vehicleType: this.vehicleType,
        capacity: this.capacity,
        farePerKm: this.farePerKm,
        availability: true,
      };
      this.service.PostVehicle(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          alert('Submitted successful');
          this.router.navigate(['/viewvehicles']);
        },
        (error) =>
        {
          console.error('Submission failed', error);
          alert('Submission failed');
        }
      );
    }
  }
// vehicleId: number,
//     vehicleName: string,
//     vehicleType: string,
//     capacity: string,
//     farePerKm: 0,
//     availability: true
 