import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  

  LocationData: any = [];

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { 
  }

    ngOnInit() {
     this.getLocation();
    }
  getLocation(): void{
    console.log('I AM RUNNING')
      this.api.getLocation().subscribe(data => {
      this.LocationData = data;
      console.log('Data recived from server.', this.LocationData);
  });
}
  goId(){
    this.router.navigate(['instructors/101']);
  }

  goId2(){
    this.router.navigate(['instructors/102']);
  }
}