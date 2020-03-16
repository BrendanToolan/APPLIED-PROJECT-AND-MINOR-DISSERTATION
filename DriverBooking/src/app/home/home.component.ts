import { Component, OnInit } from "@angular/core";
import { first } from 'rxjs/operators';

import { User } from 'src/app/model/user';
import {  AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({ templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    constructor(){}

    ngOnInit(){

    }
}