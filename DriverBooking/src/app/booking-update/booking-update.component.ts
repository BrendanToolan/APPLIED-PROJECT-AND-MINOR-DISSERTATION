import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import {bookingup} from '../model/bookingup';
import {NgForm} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

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
  public errorMsg: string;


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

  

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, public dialog: MatDialogModule) { }
  UpdateBooking(form: NgForm){
    this.api.UpdateBooking(this.book[0].bid, form.value.bookingDate, form.value.startTime, form.value.endTime).subscribe(data => {
      console.log(data)
      if(data.status){
        //this.successMsg = 'Booking Successfully Updated';
        this.router.navigate(['bookings']);
      // console.log(this.book);
      } else if(data.errorCode === 'ER_DUP_ENTRY'){
        //this.setErrorMessage('this booking already exists');
        this.errorMsg = 'This Booking Already exists try another';
      } else{
        this.setErrorMessage(data.message);
      }
    });
    console.log(form.value);
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
