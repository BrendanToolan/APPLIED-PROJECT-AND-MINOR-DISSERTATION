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