import { Component } from '@angular/core';
import { PathsService } from '../paths.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rootdetails',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './rootdetails.component.html',
  styleUrl: './rootdetails.component.css',
  providers:[PathsService]
})
export class RootdetailsComponent {

  rootsarray:any
  constructor(private service:PathsService)
  {
    this.service.getPaths().subscribe(paths=>this.rootsarray=paths)
  }
}
