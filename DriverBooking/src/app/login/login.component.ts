import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  private errorMessage;

  constructor(private auth: AuthService, private router: Router) { }

  setErrorMessage(error: String){
    this.errorMessage = error;
  }

  getErrorMessage(){
    return this.errorMessage;
  }

  loginUser(form: NgForm) {
    this.auth.checkUserInfo(form.value.username, form.value.password).subscribe(data => {
        console.log(data);
        if (data.success) { // If true navigate to home page.
            this.router.navigate(['/locations']);
            this.auth.isLogged(true); // Set client side logged in status to true.
            console.log('Success'); // Log success to console.
        } else {
            // Display error if request comes back false:
            this.setErrorMessage('Not the correct information');
        }// end if else
    });
}// End login function

  ngOnInit() {
    
  }
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  loginUserData = {}
  constructor() {

  }
 
  ngOnInit(){
  }

  loginUser(){
    console.log(this.loginUser)
  }

}
*/

/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, FormControl, FormArray,  Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import {AuthService } from 'src/app/services/auth.service';
import { AlertsService } from 'angular-alert-module';
import { UserService } from '@app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  get f() { return this.loginForm.controls}
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router, 
    private alerts: AlertsService,
  ) { }
  loginForm: FormGroup;
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(4)] ],
      password: [null, [Validators.required, Validators.minLength(4)] ]
    });
  }

  onSubmit(loginForm) {
    this.userService.loginUser(loginForm.value).subscribe((res) => {
      this.alerts.setMessage('Login Successfully', 'success');
    },
    err => {
      this.alerts.setMessage('Login Failed', 'error');
    }
    );
  }

}

*/


/*@Component({ templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuillder : FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {
    if(this.authenticationService.currUsrVal) {
      this.router.navigate(['/']);
    }
  }
/*
  loginUser() {
    this._auth.registerUser(this.userData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/location-list'])
      }, 
      err => console.log(err)
    )
  }*/

