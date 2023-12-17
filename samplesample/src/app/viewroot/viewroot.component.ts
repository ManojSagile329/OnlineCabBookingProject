import { Component } from '@angular/core';
import { PathsService } from '../paths.service';
import { IPaths } from '../paths.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewroot',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './viewroot.component.html',
  styleUrl: './viewroot.component.css',
  providers:[PathsService]
})
export class ViewrootComponent {
  // rootsarray: IPaths[] | undefined
  rootsarray:any
constructor(private service:PathsService)
{
  this.service.getPaths().subscribe(paths=>this.rootsarray=paths)
}
view()
{
  
  // for (let i=0; i<this.rootsarray.length; i++)
  // {

  // }
}
}
