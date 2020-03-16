import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.loginForm = this.formBuillder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }  

  get f() {return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error;
            this.loading = false;
          }
        );

  }

}*/