import { Component } from '@angular/core';
import { DriversService } from '../drivers.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modifydriver',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './modifydriver.component.html',
  styleUrl: './modifydriver.component.css',
  providers:[DriversService]
})
export class ModifydriverComponent {

  driverId: any
    driverName: any
    licenseNo: any
    contactNumber: any
    driverRating: any
    vehicleId: any
    vehicle:any
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
    const updatedData = {
      driverId:this.driverId,
      driverName: this.driverName,
      licenseNo: this.licenseNo,
      contactNumber: this.contactNumber,
      driverRating: this.driverRating,
      vehicleId:this.vehicleId,
      vehicle:null
    };
   
    this.service.PutDriver(this.driverId, updatedData).subscribe(
      (response) => {
        console.log('Updated successfully', response);
        alert('Updated successfully');
        this.router.navigate(['/viewdrivers']);
        
      },
      (error) => {
        console.error('Update failed', error);
        alert('Update failed');
      }
    );
  }
}
