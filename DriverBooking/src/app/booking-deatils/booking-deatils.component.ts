import { Component, OnInit } from '@angular/core';
import {ApiService } from '..//services/api.service';
import { DataSource } from '@angular/cdk/table';
import {booking} from '..//model/booking';
import { mergeMap } from 'rxjs/operators';


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
  public columns = ['bookingDate', 'startTime', 'endTime', 'cancel'];
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
DeleteBooking(id: number) {
  this.Api.DeleteBooking(id)
  .pipe(
    mergeMap(() => this.Api.getAllBookingInfo())
  )
  .subscribe((bookings: booking[]) => {
    this.bookings = bookings;
    console.log(id);
    this.successMsg = 'Booking Successfully Cancelled';
  },
  (error: ErrorEvent) => {
    this.errorMsg = error.error.message;
  });
  }
}
