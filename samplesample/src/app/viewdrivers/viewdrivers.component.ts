import { Component } from '@angular/core';
import { DriversService } from '../drivers.service';
import { IDrivers } from '../driver.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewdrivers',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,FormsModule],
  templateUrl: './viewdrivers.component.html',
  styleUrl: './viewdrivers.component.css',
  providers:[DriversService]
})
export class ViewdriversComponent {
  // driversarray: IDrivers[] | undefined
  driversarray:any
constructor(private service:DriversService)
{
  // this.service.getEvents().subscribe(roots => this.rootsarray = roots)
  this.service.getDrivers().subscribe(drivers => this.driversarray=drivers)
}

}
