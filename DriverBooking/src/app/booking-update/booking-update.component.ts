import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import {bookingup} from '../model/bookingup';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-booking-update',
  templateUrl: './booking-update.component.html',
  styleUrls: ['./booking-update.component.css']
})
export class BookingUpdateComponent implements OnInit {

  CurrentBooking: any = [];
  id: any = [];
  app: any = [];
  private errorMessage;
  public successMsg: string;


  setErrorMessage (error: String){
    this.errorMessage = error;
  }

  getErrorMessage(){
    return this.errorMessage
  }

  book: bookingup ={
   // bid: 0,
    bookingDate: '',
    startTime: '',
    endTime: '',
  };

  

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  UpdateBooking(form: NgForm){
    this.api.UpdateBooking(this.book[0].bid, form.value.bookingDate, form.value.startTime, form.value.endTime).subscribe(data => {
      console.log(data)
      if(data.status){
       this.router.navigate(['/bookings']);
       console.log(this.book);
      } else if(data.errorCode === 'Duplicate Entry'){
        this.setErrorMessage('this booking already exists');
      } else{
        this.setErrorMessage(data.message);
      }
    });
    console.log(form.value);
    this.successMsg = 'Booking Successfully Updated';

  }

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
