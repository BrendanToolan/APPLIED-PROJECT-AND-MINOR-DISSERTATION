import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { instructorID } from '..//model/instructorID';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialogModule} from '@angular/material';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  private errorMessage;
  public successMsg: string;
  public errorMsg: string;
  id: any = [];

  int: instructorID = {
    name:  '',
    lastName: '',
   };

   constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, public dialog: MatDialogModule) { }

  setErrorMessage(error: String) {
    this.errorMessage = error;
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  MakeBooking(form: NgForm) {
    // Push data to api => to be pushed to database.
    this.api.MakeBooking(form.value.bid ,form.value.InstructorName, form.value.email, form.value.bookingDate, form.value.startTime, form.value.endTime).subscribe(data => {
        if (data.status) {
          this.successMsg = 'Booking Sucessful';
        } else if (data.errorCode === 'ER_DUP_ENTRY') {
            //this.setErrorMessage('This Booking already exists try another one');
            //console.log("duplicate entry");
            this.errorMsg = 'This Booking already exists try another one';
        } else {
          this.setErrorMessage(data.message);
        }
    });
    console.log(form.value);
    form.resetForm(); // Reset the form
  }// E

  ngOnInit() {
    const params = this.route.snapshot.params
    if(params.id){
      this.api.getInstructorForBooking(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.int = res;
          this.id = res;
          console.log("id = "+ this.id)
        },
        err => console.log(err)
      )
    }
  }

}
