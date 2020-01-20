import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  LocationData: any = [];

  constructor(private api: ApiService, private router: Router) { 
  }

    ngOnInit() {
      console.log('I AM RUNNING')
      this.api.getLocation().subscribe(data => {
      this.LocationData = data;
      console.log('Data recived from server.', this.LocationData);
    });
  }
}