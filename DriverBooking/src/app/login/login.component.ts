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
        //console.log(data);
        if (data.success) { // If true navigate to home page.
            
            this.router.navigate(['/instructors']);
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

