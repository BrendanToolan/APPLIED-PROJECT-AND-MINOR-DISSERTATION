import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';

import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Google Cloud Instance VM
  // GoogleVM = ""1563868.6732486423837;
  Url: string = "http://localhost:8081/api/";

  constructor(private http: HttpClient) { }

  //Contacts the server to get location data
  getLocation(): Observable<any> {
    return this.http.get(this.Url + 'locations');
    //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  }

  getInstructor(): Observable<any> {
    return this.http.get(this.Url + 'instructors');
    //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  }

<<<<<<< HEAD
  getReg(): Observable<any> {
    return this.http.post(this.Url + 'users', HttpClient);
  }

  // getInstructor(): Observable<any> {
  // return this.http.get(this.Url + 'instructors');
  //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  //}
=======
  registerUser(user: User) {
    // debugger
    return this.http.post<User>(this.Url + 'register', user);
   }
>>>>>>> aa7bd9b4df09538572ca955ddb3b6ada4d44f476

  get(id: string) {
   // return this.http.get(`${this.Url + 'instructors'}/${InstructorId}`);
   return this.http.get(`${this.Url +'instructors'}/${id}`);
  }
}

