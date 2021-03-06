import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { instructor } from '../model/instructor';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  CurrentInstructor: any = [];
  id: any = [];

  inst: instructor ={
    Lid: 0,
    location: '',
    name: '',
    lastName: '',
    Phonenumber: 0,
    Email: '',
    picture_path: '',
  };



  constructor(private Api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.route.snapshot.params
    if(params.id){
      this.Api.get(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.inst = res;
          this.id = res;
        },
        err => console.log(err)
      )
    }
  }
}
