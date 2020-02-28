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
  name : string;

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
  Search(){
    if(this.name != ""){
       this.LocationData = this.LocationData.filter(res =>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  else if (this.name == ""){
    this.ngOnInit();
  }
}
}