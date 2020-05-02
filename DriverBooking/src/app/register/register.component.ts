import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPageComponent implements OnInit {

  private errorMessage;
  public successMsg: string;
  public errorMsg: string;

  
  constructor(private auth: AuthService, private router: Router) {

  }

  setErrorMessage(error: String) {
    this.errorMessage = error;
}

getErrorMessage() {
    return this.errorMessage;
}


  ngOnInit() {
    
}
registerUser(form: NgForm) {
  // TO-DO Validation to be added
  // Push data to api => to be pushed to database.
  this.auth.registerUser(form.value.username, form.value.firstname, form.value.surname, form.value.phoneNo, form.value.password).subscribe(data => {
      if (data) {
          this.successMsg = 'Account Successfully Created';
          this.router.navigate(['/Login']);
      } else if (data.errorCode === 'ER_DUP_ENTRY') {
         // this.setErrorMessage('Please use another User Names');
          this.errorMsg = 'This Username Already exists try another';
      } 
  });
  console.log(form.value);
  form.resetForm(); // Reset the form
}

}