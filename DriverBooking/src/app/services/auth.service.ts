import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _loginUrl = "http://localhost:8081/api/login";
    private _regUrl = "http://localhost:8081/api/users"

    constructor(private http: HttpClient, private _router: Router){ }

    regUser(user){
        return this.http.post<any>(this._regUrl, user)
    }

    loginUser(user){
        return this.http.post<any>(this._loginUrl, user)
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }

    getToken() {
        return localStorage.getItem('token')
    }
}