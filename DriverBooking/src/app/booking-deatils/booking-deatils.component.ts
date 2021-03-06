import { Component, OnInit } from '@angular/core';
import {ApiService } from '..//services/api.service';
import { DataSource } from '@angular/cdk/table';
import {booking} from '..//model/booking';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-deatils',
  templateUrl: './booking-deatils.component.html',
  styleUrls: ['./booking-deatils.component.css']
})
export class BookingDeatilsComponent implements OnInit {

  id: number;
  public loading = true;
  public errorMsg: string;
  public successMsg: string;

  public bookings: booking[];
  public columns = ['InstructorName','bookingDate', 'startTime', 'endTime', 'cancel', 'update'];
  //DataSource = this.bookings;

  constructor(private Api: ApiService, private router: Router) { }

  ngOnInit() {
    this.Api.getAllBookingInfo()
    .subscribe((bookings: booking[]) =>{
      this.bookings = bookings;
      this.loading = false;
    },
    (error: ErrorEvent) => {
      this.errorMsg = 'Cannot load bookings';
      this.loading = false;
    });
}

DeleteBooking(id: number){
  console.log("id = ",id);
this.Api.deleteBookingByID(id).subscribe(() =>{
  this.successMsg = 'Booking Successfully Cancelled';
  this.ngOnInit();
});
}
}