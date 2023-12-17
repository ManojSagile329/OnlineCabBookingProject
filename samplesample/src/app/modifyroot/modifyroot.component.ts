import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PathsService } from '../paths.service';

@Component({
  selector: 'app-modifyroot',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,FormsModule],
  templateUrl: './modifyroot.component.html',
  styleUrl: './modifyroot.component.css',
  providers:[RideService,PathsService]
})
export class ModifyrootComponent {

  routeId: any
  source: any
  destination: any
  duration: any
  distance: any
  rootsarray:any

constructor(private service:RideService,private router:Router,private serv:PathsService)
{
  this.serv.getPaths().subscribe(paths=>this.rootsarray=paths)
}

  onSubmit() 
  {
    for (let i=0; i<this.rootsarray.length; i++)
      {
        if(this.source==this.rootsarray[i].source && this.destination==this.rootsarray[i].destination)
        {
          if(i+1==this.routeId)
          {
            
          }
          else{
            alert('This route is already existed ')
            this.destination=""
            this.source=""
          }
        }
        if(this.source==null||this.destination==null||this.duration==null||this.distance==null)
        {
          alert('Please fill all the  fields')
          break
        }
      }

    const updatedData = {
      routeId: this.routeId,
      source: this.source,
      destination: this.destination,
      duration: this.duration,
      distance:this.distance
    };
   
    this.service.PutRoot(this.routeId, updatedData).subscribe(
      (response) => {
        console.log('Updated successfully', response);
        alert('Updated successfully');
        this.router.navigate(['/viewpath']);
      },
      (error) => {
        console.error('Update failed', error);
        alert('Invalid Information');
      }
    );
  }
}
