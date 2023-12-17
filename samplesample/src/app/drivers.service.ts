import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDrivers } from './driver.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  // apiUrl='http://localhost:5096/api'
  apiUrl='https://maincabbooking20231217191323.azurewebsites.net/api' 

  

  constructor(private httpClient:HttpClient) { }
  
  // getDrivers():Observable<IDrivers[]> {
  //   return this.httpClient.get<IDrivers[]>('http://localhost:5096/api/Drivers')
  // }

  getDrivers():Observable<IDrivers[]> {
    return this.httpClient.get<IDrivers[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Drivers')
  }

  // PostDrivers(DriverData: any): Observable<IDrivers[]> {
  //   return this.httpClient.post<IDrivers[]>('http://localhost:5096/api/Drivers', DriverData);
  // }

  PostDrivers(DriverData: any): Observable<IDrivers[]> {
    return this.httpClient.post<IDrivers[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Drivers', DriverData);
  }

  

  deleteDriver(DriverId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/Drivers/${DriverId}`);
  }

  PutDriver(DriverId: number, updatedData: any): Observable<any> {     
    return this.httpClient.put<any>(`${this.apiUrl}/Drivers/${DriverId}`, updatedData);
  }

}


// https://finalwebapi.azurewebsites.net/api