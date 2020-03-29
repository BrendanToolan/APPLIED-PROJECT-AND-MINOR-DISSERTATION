import { Component, OnInit } from '@angular/core';
import {ApiService } from '..//services/api.service';
import { DataSource } from '@angular/cdk/table';
import {booking} from '..//model/booking';

@Component({
  selector: 'app-booking-deatils',
  templateUrl: './booking-deatils.component.html',
  styleUrls: ['./booking-deatils.component.css']
})
export class BookingDeatilsComponent implements OnInit {

  public loading = true;
  public errorMsg: string;
  public successMsg: string;

  public bookings: booking[];
  public columns = ['bookingDate', 'startTime', 'endTime'];
  //DataSource = this.bookings;

  constructor(private Api: ApiService) { }

  ngOnInit() {
    this.Api.getAllBookingInfo()
    .subscribe((bookings: booking[]) =>{
      this.bookings = bookings;
      this.loading = false;
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
      this.loading = false;
    });
}

}
