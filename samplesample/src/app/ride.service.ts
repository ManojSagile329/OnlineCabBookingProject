import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable,  inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IRide } from './ride.model';
import { IVehicls } from './vehicles.model';
import { ISam } from './signuppage/sample.model';
import { ICust } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class RideService  {
  // httpClient = inject(HttpClient);
  arr:any
  dataroots:any
  datavehicles:any
  constructor(private httpClient:HttpClient ) 
  {  }

  // apiUrl='http://localhost:5096/api'
  // apiUrl1='http://localhost:5096/api'
  // apiUrl2='http://localhost:5096/api'

  apiUrl='https://maincabbooking20231217191323.azurewebsites.net/api'
  apiUrl1='https://maincabbooking20231217191323.azurewebsites.net/api'
  apiUrl2='https://maincabbooking20231217191323.azurewebsites.net/api'

  // https://finalwebapi.azurewebsites.net/api
 
  // getEvents():Observable<IRide[]> {
  //   return this.httpClient.get<IRide[]>('http://localhost:5096/api/Routings')
  // }

  getEvents():Observable<IRide[]> {
    return this.httpClient.get<IRide[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Routings')
  }

  // getVehicles():Observable<IVehicls[]> {
  //   return this.httpClient.get<IVehicls[]>('http://localhost:5096/api/Vehicles')
  // }

  getVehicles():Observable<IVehicls[]> {
    return this.httpClient.get<IVehicls[]>('https://maincabbooking20231217191323.azurewebsites.net/api/Vehicles')
  }


  // PostVehicle(VehicleData: any): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:5096/api/Vehicles', VehicleData);
  // }

  PostVehicle(VehicleData: any): Observable<any> {
    return this.httpClient.post<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Vehicles', VehicleData);
  }

  // PostRoots(RootData: any): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:5096/api/Routings', RootData);
  // }

  PostRoots(RootData: any): Observable<any> {
    return this.httpClient.post<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Routings', RootData);
  }

  // deleteRoot(RootId: number): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.apiUrl}/Routings/${RootId}`);
  // }

  deleteRoot(RootId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/Routings/${RootId}`);
  }

  // deleteRoot(RootId: number): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.apiUrl}/Routings/${RootId}`);
  // }


  PutRoot(RootId: number, updatedData: any): Observable<any> {     
    return this.httpClient.put<any>(`${this.apiUrl1}/Routings/${RootId}`, updatedData);
  }

  // PutRoot(RootId: number, updatedData: any): Observable<any> {     
  //   return this.httpClient.put<any>(`${this.apiUrl1}/Routings/${RootId}`, updatedData);
  // }

  // getRouteById(id:number):Observable<any> {
  //   return this.httpClient.get<any>('http://localhost:5096/api/Routings' + id)
  // }
  
getRouteById(id:number):Observable<any> {
    return this.httpClient.get<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Routings' + id)
  }
  // getVehcileById(id:number):Observable<any> {
  //   return this.httpClient.get<any>('http://localhost:5096/api/Vehicles' + id)  
  // }
  // getVehcileById(id:any): Observable<any> {
  //   const url = `${'http://localhost:5096/api/Vehicles'}/${id}`;
  //   return this.httpClient.get(url);
  // }
  // getVehcileById(id:number):Observable<any> {
  //   return this.httpClient.get<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Vehicles' + id)  
  // }
  getVehcileById(id:any): Observable<any> {
    const url = `${'https://maincabbooking20231217191323.azurewebsites.net/api/Vehicles'}/${id}`;
    return this.httpClient.get(url);
  }

  // getCustById(id:number):Observable<any> {
  //   return this.httpClient.get<any>('http://localhost:5096/api/Customers' + id)  
  // }

  getCustById(id:number):Observable<any> {
    return this.httpClient.get<any>('https://maincabbooking20231217191323.azurewebsites.net/api/Customers' + id)  
  }

  PutVehicle(VehicleId: number, updatedData: any): Observable<any> {     
    return this.httpClient.put<any>(`${this.apiUrl1}/Vehicles/${VehicleId}`, updatedData);
  }

  // PutVehicle(VehicleId: number, updatedData: any): Observable<any> {     
  //   return this.httpClient.put<any>(`${this.apiUrl1}/Vehicles/${VehicleId}`, updatedData);
  // }

  deleteVehicle(RootId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl2}/Vehicles/${RootId}`);
  }

  // deleteVehicle(RootId: number): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.apiUrl2}/Vehicles/${RootId}`);
  // }

}
  // http://localhost:5271/api/Routings/6
 


// handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<unknown>) => import("rxjs").ObservableInput<any> {
//   throw new Error('Method not implemented.');
// .pipe(catchError(this.handleError<IEvent>('getEvent')))