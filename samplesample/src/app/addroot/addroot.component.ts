import { Component } from '@angular/core';
import { RideService } from '../ride.service';
import { RouterModule,Router  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PathsService } from '../paths.service';
 
@Component({
  selector: 'app-addroot',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  templateUrl: './addroot.component.html',
  styleUrl: './addroot.component.css',
  providers:[RideService,PathsService]
})
export class AddrootComponent {
  source:any
  destination:any
  duration:any
  distance:any
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
          alert('This root is already existed ')
          this.destination=""
          this.source=""
         
        }
        if(this.source==null||this.destination==null||this.duration==null||this.distance==null)
        {
          alert('Please fill all the  fields')
          break
        }
      }
      const Data =
      {
        source: this. source,
        destination: this.destination,
        duration: this.duration,
        distance: this.distance ,
      };
      this.service.PostRoots(Data).subscribe
      (
        (response) =>
        {
          console.log('Submitted successful', response);
          alert('Submitted successful');
          this.router.navigate(['/viewpath']);
         
        },
        (error) =>
        {
          console.error('Submission failed', error);
          alert('Submission failed');
        }
      );
    }
}