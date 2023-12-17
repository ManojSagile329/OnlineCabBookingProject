// admin.component.ts

import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-admin',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[AdminService]
})
export class AdminComponent {
  // constructor(private adminService: AdminService) {}

  // //Vehicle Management
  // addVehicle() {
  //   // Implement logic to add a new vehicle
  // }

  // deleteVehicle(vehicleId: number) {
  //   // Implement logic to delete a vehicle by ID
  // }

  // viewVehicles() {
  //   // Implement logic to retrieve and display a list of vehicles
  // }

  // // Route Management
  // addRoute() {
  //   // Implement logic to add a new route
  // }

  // deleteRoute(routeId: number) {
  //   // Implement logic to delete a route by ID
  // }

  // viewRoutes() {
  //   // Implement logic to retrieve and display a list of routes
  // }

  // // Driver Management
  // addDriver() {
  //   // Implement logic to add a new driver
  // }

  // deleteDriver(driverId: number) {
  //   // Implement logic to delete a driver by ID
  // }

  // allotDriver(driverId: number, vehicleId: number) {
  //   // Implement logic to allot a driver to a vehicle
  // }

  // viewDrivers() {
  //   // Implement logic to retrieve and display a list of drivers
  // }

  // // Customer Details
  // viewCustomerDetails() {
  //   // Implement logic to retrieve and display customer details
  // }
}