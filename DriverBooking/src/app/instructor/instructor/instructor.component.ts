import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  InstructorData: any = [];
  InstructorGort: any = [];

  constructor(private api: ApiService, private router: Router) { 
  }

  ngOnInit() {
    console.log('I AM RUNNING INSTRUCTOR');
      this.api.getInstructor().subscribe(data => {this.InstructorData = data;
        console.log('Data recived from server.', this.InstructorData);
      
      });
    }
  } 
