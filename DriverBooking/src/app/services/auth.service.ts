import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    //private _loginUrl = "http://localhost:8081/api/login";
    private _regUrl = "http://localhost:8081/api/register"

    constructor(private http: HttpClient, private _router: Router){ }

    registerUser(username: String, password: String): Observable<User> {
       
        const user: User = {
            username: username,
            password: password
        };
        return this.http.post<User>(this._regUrl, user);
    }
}