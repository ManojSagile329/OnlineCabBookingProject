import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { CustomerloginComponent } from '../customerlogin/customerlogin.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CustomerloginComponent,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
