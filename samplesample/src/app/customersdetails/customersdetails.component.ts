import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ICust } from '../customer.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customersdetails',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './customersdetails.component.html',
  styleUrl: './customersdetails.component.css',
  providers:[AuthService]
})
export class CustomersdetailsComponent {
  // custarray: ICust[] | undefined
  custarray:any
constructor(private service:AuthService)
{
  this.service.getCustomers().subscribe(cust=>this.custarray=cust)
}
}
