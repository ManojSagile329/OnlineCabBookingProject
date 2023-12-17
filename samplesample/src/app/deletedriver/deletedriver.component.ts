import { Component } from '@angular/core';
import { DriversService } from '../drivers.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deletedriver',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './deletedriver.component.html',
  styleUrl: './deletedriver.component.css',
  providers:[DriversService]
})
export class DeletedriverComponent {
  driverId: any
  constructor(private service:DriversService,private router:Router)
  {

  }
  onDelete() {

    if(this.driverId==null)
    {
      alert('Please fill required field ')
    }
    // Assuming you have a method in your service to delete a vehicle
    this.service.deleteDriver(this.driverId).subscribe(
      (response) => {
        console.log('Deleted successfully', response);
        alert('Deleted successfully');
        this.router.navigate(['/viewdrivers']);
        // You can perform additional actions after successful deletion if needed
      },
      (error) => {
        console.error('Deletion failed', error);
        alert('Deletion failed');
      }
    );
  }
}
