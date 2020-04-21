import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import {bookingup} from '../model/bookingup';

@Component({
  selector: 'app-booking-update',
  templateUrl: './booking-update.component.html',
  styleUrls: ['./booking-update.component.css']
})
export class BookingUpdateComponent implements OnInit {

  CurrentBooking: any = [];
  id: any = [];

  book: bookingup ={
    bid: 0,
    InstructorName: '',
    email: '',
    bookingDate: '',
    startTime: '',
    endTime: '',
  };

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    const params = this.route.snapshot.params
    if(params.id){
      this.api.getBookingID(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.book = res;
          this.id = res;
        },
        err => console.log(err)
      )
    }
  }

}
