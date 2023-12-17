import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AdminnotfoundComponent } from './adminnotfound/adminnotfound.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerstartComponent } from './customerstart/customerstart.component';
import { RidepageComponent } from './ridepage/ridepage.component';
import { BookingconfirmComponent } from './bookingconfirm/bookingconfirm.component';
import { AdminstartpageComponent } from './adminstartpage/adminstartpage.component';
import { DriverspageComponent } from './driverspage/driverspage.component';
import { ViewdriversComponent } from './viewdrivers/viewdrivers.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { DeletedriverComponent } from './deletedriver/deletedriver.component';
import { RootpageComponent } from './rootpage/rootpage.component';
import { AddrootComponent } from './addroot/addroot.component';
import { ViewrootComponent } from './viewroot/viewroot.component';
import { DeleterootComponent } from './deleteroot/deleteroot.component';
import { CustomersdetailsComponent } from './customersdetails/customersdetails.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { ModifyrootComponent } from './modifyroot/modifyroot.component';
import { ModifydriverComponent } from './modifydriver/modifydriver.component';
import { ModifyvehicleComponent } from './modifyvehicle/modifyvehicle.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { DeletevehicleComponent } from './deletevehicle/deletevehicle.component';
import { eventRouteActivator } from './bookpage/routeactivator.guard';
import { CablistComponent } from './cablist/cablist.component';
import { BookingdataComponent } from './bookingdata/bookingdata.component';
import { RootdetailsComponent } from './rootdetails/rootdetails.component';
import { DriverdetailsComponent } from './driverdetails/driverdetails.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path:'home',component:HomeComponent},
    {path:'drivers',component:DriverspageComponent},
    {path:'viewdrivers',component:ViewdriversComponent},
    {path:'adddriver',component:AdddriverComponent},
    {path:'deldriver',component:DeletedriverComponent},

    {path:'rootdetails',component:RootdetailsComponent},
    {path:'cust',component:CustomerloginComponent},
    {path:'start',component:CustomerstartComponent},
    {path:'ride',component:RidepageComponent},
    {path:'book',component:BookingconfirmComponent},
    {path:'paths',component:RootpageComponent},
    {path:'data',component:BookingdataComponent},
    {path:'addpath',component:AddrootComponent},
    {path:'viewvehicles',component:ViewvehicleComponent},
    {path:'vehicles',component:VehicleComponent},
    {path:'driverdetails',component:DriverdetailsComponent},
    {path:'pay',component:PaymentComponent},
    {path:'cabb/:id',component:BookpageComponent},
    {path:'viewpath',component:ViewrootComponent},
    {path:'delpath',component:DeleterootComponent},
    {path:'modpath',component:ModifyrootComponent},
    {path:'moddriver',component:ModifydriverComponent},
    {path:'modvehicle',component:ModifyvehicleComponent},
    {path:'delvehicle',component:DeletevehicleComponent},
    {path:'signup',component:SignuppageComponent},
    
    {path:'details/:id',component:BookingdetailsComponent},
    {path:'confirm',component:ConfirmpageComponent},
    {path:'view',component:AdminstartpageComponent},
    {path:'addvehicle',component:AddvehicleComponent},
    {path:'cab',component:CablistComponent},
    {path:'customers',component:CustomersdetailsComponent},
    // {path:'404',component:AdminnotfoundComponent},
    {path :'',redirectTo:'/home',pathMatch:'full'}
];
