//admin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  // Add a new vehicle
  addVehicle(vehicleDetails: any): Observable<any> {
    const url = `${this.apiUrl}/vehicles/add`; // Replace with your actual endpoint
    return this.http.post(url, vehicleDetails);
  }

  // Delete a vehicle by ID
  deleteVehicle(vehicleId: number): Observable<any> {
    const url = `${this.apiUrl}/vehicles/delete/${vehicleId}`; // Replace with your actual endpoint
    return this.http.delete(url);
  }

  // Get a list of vehicles
  getVehicles(): Observable<any[]> {
    const url = `${this.apiUrl}/vehicles`; // Replace with your actual endpoint
    return this.http.get<any[]>(url);
  }

  // Add, delete, and modify routes, drivers, and other functionalities as needed
}