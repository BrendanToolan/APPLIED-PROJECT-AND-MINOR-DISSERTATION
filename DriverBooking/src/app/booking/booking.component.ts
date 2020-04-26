import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { instructor } from '@app/model/instructor';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  private errorMessage;
  public successMsg: string;
  id: any = [];

  intst: instructor = {
    name:  '',
    lastName: ''
   };

   constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  setErrorMessage(error: String) {
    this.errorMessage = error;
}

getErrorMessage() {
    return this.errorMessage;
}


  ngOnInit() {
    const params = this.route.snapshot.params
    if(params.id){
      this.api.getInstructorForBooking(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.intst = res;
          this.id = res;
        },
        err => console.log(err)
      )
    }
  }

  MakeBooking(form: NgForm) {
    // TO-DO Validation to be added
    // Push data to api => to be pushed to database.
    this.api.MakeBooking(form.value.bid ,form.value.InstructorName, form.value.email, form.value.bookingDate, form.value.startTime, form.value.endTime).subscribe(data => {
        if (data) {
            // user registered, now run login page.
           // this.router.navigate(['/Locations']);
        } else if (data.bookingDate || data.startTime || data.endTime === 'ER_DUP_ENTRY') {
            this.setErrorMessage('This Booking already exists in the databases, please try another one');
        } 
    });
    console.log(form.value);
    this.successMsg = 'Booking Sucessful';
    form.resetForm(); // Reset the form
  }// E

}
