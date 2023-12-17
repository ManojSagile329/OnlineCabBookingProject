import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deleteroot',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './deleteroot.component.html',
  styleUrl: './deleteroot.component.css',
  providers:[RideService]
})
export class DeleterootComponent {
  routeId:any
  constructor(private service:RideService,private router:Router){}

  onDelete() {

    if(this.routeId==null)
    {
      alert('Please fill required field ')
    }
    // Assuming you have a method in your service to delete a vehicle
    this.service.deleteRoot(this.routeId).subscribe(
      (response) => {
        console.log('Deleted successfully', response);
        alert('Deleted successfully');
        this.router.navigate(['/viewpath']);
        // You can perform additional actions after successful deletion if needed
      },
      (error) => {
        console.error('Deletion failed', error);
        alert('Deletion failed');
      }
    );
  }
}
