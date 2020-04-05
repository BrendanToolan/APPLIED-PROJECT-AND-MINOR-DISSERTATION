import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];

  constructor(private api: ApiService, private router: Router) { 

  }

  onLogout(){
    this.api.logout().subscribe(data => {
      if(data){
        this.router.navigate(['/Login']);
      } else {
        alert('Could not complete Request');
      }
    });
  }

  ngOnInit() {

    this.api.getUserDetails().subscribe(data =>{
      this.users = data;
    })

  }
}
