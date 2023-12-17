import { Component } from '@angular/core';
import { DriversService } from '../drivers.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-adddriver',
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './adddriver.component.html',
  styleUrl: './adddriver.component.css',
  providers:[DriversService]
})
export class AdddriverComponent {

  driverName:any
  licenseNo: any
  contactNumber: any
  driverRating: any
   vehicleId: any
  
      drivers:any

    constructor(private service:DriversService,private router:Router)
    {
      this.service.getDrivers().subscribe(driver=>this.drivers=driver)
      
    }
  onSubmit()
    { 

      for (let i=0; i<this.drivers.length; i++)
      {
        if(this.licenseNo==this.drivers[i].licenseNo)
        {
          alert('This License Number is already Exist ')
          this.licenseNo=""
          break
        }
        if(this.driverName==null || this.licenseNo==null || this.contactNumber==null || this.driverRating==null || this.vehicleId==null)
        {
          alert('Please Fill all the details')
          break
        }
      }
      const Data =
      {
        driverName: this.driverName,
        licenseNo: this.licenseNo,
        contactNumber: this.contactNumber,
        driverRating:this.driverRating,
        vehicleId:this.vehicleId,
      };
      this.service.PostDrivers(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          alert('Submitted successful');
          this.router.navigate(['/viewdrivers']);
         
        },
        (error) =>
        {
          console.error('Submission failed', error);
          alert('Submission failed');
        }
      );
    }
  
}
