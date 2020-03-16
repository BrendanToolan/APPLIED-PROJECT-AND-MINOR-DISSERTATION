import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable, Subscription, Subject, asapScheduler, pipe, of, from } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap, filter, scan } from 'rxjs/operators'
//import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class UserService {
    readonly baseURL = 'http://localhost:8081/api';
    constructor(
        private http: HttpClient, 
        private router: Router){}
        
    getUserList(){
        return this.http.get(this.baseURL + 'users');
    }

    loginUser(body: any){
        return this.http.post(this.baseURL + 'Login', body, {observe: 'body'});
    }

    setToken(token: string){
        localStorage.setItem('token', token);
    }

    getToken(){
        return localStorage.getItem('token');
    }

    deleteToken(){
        localStorage.removeItem('token');
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }

    logOut(){
        localStorage.removeItem('token');
        this.router.navigateByUrl('/Login');
    }




}