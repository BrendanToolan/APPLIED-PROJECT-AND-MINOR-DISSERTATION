import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { Data } from '@syncfusion/ej2-schedule/src/schedule/actions/data';

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

  // getInstructor(): Observable<any> {
  // return this.http.get(this.Url + 'instructors');
  //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  //}

  get(id: string) {
    //let data = JSON.stringify({'id':InstructorId})
   // console.log(`${this.Url + 'instructors'}/${InstructorId}`);
   // return this.http.get(`${this.Url + 'instructors'}/${InstructorId}`);
   return this.http.get(`${this.Url +'instructors'}/${id}`);
  }
}

