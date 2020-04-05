import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AuthData } from '@app/auth.data';
//import * as bcrypt from 'bcryptjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

  //Url = 'http://localhost:4200';

  private loggedIn = false

  logout() {
    throw new Error("Method not implemented.");
  }

  //needed for the cloud
  //AWS_Cloud_login: string = 'http://ec2-34-241-26-162.eu-west-1.compute.amazonaws.com:8081/api/Login';
  //AWS_Cloud_reg: string = 'http://ec2-34-241-26-162.eu-west-1.compute.amazonaws.com:8081/api/register';
   
    //needed locally
  private _loginUrl = "http://localhost:8081/api/Login";
  private _regUrl = "http://localhost:8081/api/register"

    constructor(private http: HttpClient, private _router: Router){ }

    registerUser(username: String, password: String): Observable<User> {
       
        const user: User = {
            username: username,
            password: password
        };
        //needed for the cloud
        //return this.http.post<User>(this.AWS_Cloud_reg, user);
       //needed for locally
        return this.http.post<User>(this._regUrl, user);
    }

    //needed for the cloud
   /* loginUser(user){
      return this.http.post<any>(this.AWS_Cloud_login, user)
        .subscribe(
          res => console.log(res),
          err => console.log(err)

        )
    }*/

    //needed for locally
    loginUser(user){
      return this.http.post<any>(this._loginUrl, user)
        .subscribe(
          res => console.log(res),
          err => console.log(err)

        )
    }

    private loggedInStatus = false;

    isLogged(value: boolean){
      this.loggedInStatus = value;
    }

    get isLoggedIn(){
      return this.loggedInStatus;
    }

    //used for the cloud
    /*checkUserInfo(username, password) {
      console.log(username, password);
      return this.http.post<AuthData>(this.AWS_Cloud_login ,{
          username,
          password
      }, {withCredentials: true});
  }// End function */

  //used for locally
  checkUserInfo(username, password) {
    console.log(username, password);
    return this.http.post<AuthData>(this._loginUrl ,{
        username,
        password
    }, {withCredentials: true});
}// End function 



}