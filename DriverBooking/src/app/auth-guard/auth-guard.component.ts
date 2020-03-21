import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
private _router: Router){ }

  canActivate(): boolean {
    if (this.canActivate){
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}


/*import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    const currUser = this.authenticationService.currUsrVal;
    if(currUser){
      return true;
    }
s
    this.router.navigate(['/Login'], {queryParams: { returnUrl: state.url } });
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
private _router: Router){ }

  canActivate(): boolean {
    if (this.canActivate){
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}*/