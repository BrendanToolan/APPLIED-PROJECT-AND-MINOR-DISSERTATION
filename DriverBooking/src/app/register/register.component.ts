import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'
import { FormsModule, FormControl, FormBuilder, FormGroup, FormArray,  Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from '../model/user';

//import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  checkForm: FormGroup;
  
  constructor(private router: Router, private Api: ApiService) {


<<<<<<< HEAD
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
=======
  }
>>>>>>> aa7bd9b4df09538572ca955ddb3b6ada4d44f476

  ngOnInit() {
    
} 

SubmitForm(FormData) : void {
  console.log(FormData);
  this.Api.registerUser( FormData ).subscribe((res) => {
   
     
     console.log(res);
     this.router.navigateByUrl('/Login');
  },
    err => {
      console.log(err);
       //this.alerts.setMessage ('Registration in-complete', 'error');
    }
  );
}
}
