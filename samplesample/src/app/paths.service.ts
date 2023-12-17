import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaths } from './paths.model';
import { HttpClient } from '@angular/common/http';
import { IBooking } from './Booking.model';

@Injectable({
  providedIn: 'root'
})
export class PathsService {

  constructor(private httpClient:HttpClient) { }

  // getPaths():Observable<IPaths[]> {
  //   return this.httpClient.get<IPaths[]>('http://localhost:5096/api/Routings')
  // }

  getPaths():Observable<IPaths[]> {
    return this.httpClient.get<IPaths[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Routings')
  }

  // PostBooking(Data: any): Observable<IBooking[]> {
  //   return this.httpClient.post<IBooking[]>('http://localhost:5096/api/BookingDetails',Data);
  // }
  // PostBooking(Data: any): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:5096/api/BookingDetails',Data);
  // }

  PostBooking(Data: any): Observable<IBooking[]> {
    return this.httpClient.post<IBooking[]>('https://maincabbooking20231217191323.azurewebsites.net/api/BookingDetails',Data);
  }


  // getBooking():Observable<IBooking[]> {
  //   return this.httpClient.get<IBooking[]>('http://localhost:5096/api/BookingDetails')
  // }

  getBooking():Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>('https://maincabbooking20231217191323.azurewebsites.net/api/BookingDetails')
  }
  
  

}
// https://finalwebapi.azurewebsites.net/api