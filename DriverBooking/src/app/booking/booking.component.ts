import { Component, OnInit } from '@angular/core';
import { Schedule } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-booking',
  template: '<ejs-schedule height="90%" width="80%" padding="5%"></ejs-schedule>',
  //templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
