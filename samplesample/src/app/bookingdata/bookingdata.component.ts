import { Component } from '@angular/core';
import { PathsService } from '../paths.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookingdata',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RouterModule],
  templateUrl: './bookingdata.component.html',
  styleUrl: './bookingdata.component.css',
  providers:[PathsService]
})
export class BookingdataComponent {

  bookings:any
  constructor(private service:PathsService)
  {
    this.service.getBooking().subscribe(booking=>this.bookings=booking)
  }

}
