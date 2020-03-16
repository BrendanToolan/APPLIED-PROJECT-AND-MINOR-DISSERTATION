import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPageComponent implements OnInit {

  userData = {}
  constructor(private api: ApiService, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    console.log('I am Running Reg')
    this.api.getReg().subscribe(data => {
    this.userData = data;
    console.log('Data received from server.', this.userData);
    });
  }

  /*regUser() {
    this._auth.regUser(this.userData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/location'])
        },
        err => console.log(err)
      )
  }*/

}