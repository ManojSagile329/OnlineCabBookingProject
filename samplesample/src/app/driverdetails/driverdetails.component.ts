import { Component } from '@angular/core';
import { DriversService } from '../drivers.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driverdetails',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,FormsModule],
  templateUrl: './driverdetails.component.html',
  styleUrl: './driverdetails.component.css',
  providers:[DriversService]
})
export class DriverdetailsComponent {

  driversarray:any
  constructor(private service:DriversService)
  {
    // this.service.getEvents().subscribe(roots => this.rootsarray = roots)
    this.service.getDrivers().subscribe(drivers => this.driversarray=drivers)
  }
}
