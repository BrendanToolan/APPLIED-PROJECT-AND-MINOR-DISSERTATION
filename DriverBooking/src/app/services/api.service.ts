import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Google Cloud Instance VM
  // GoogleVM = ""1563868.6732486423837;

  constructor(private http: HttpClient) { }

  //Contacts the server to get location data
  getLocation(): Observable<any> {
    return this.http.get('http://localhost:8081/api/locations');
    //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  }

  getInstructor(): Observable<any> {
    return this.http.get('http://localhost:8081/api/instructors');
    //return this.http.get(this.GoogleVM + '/api/accom', {withCredentials: true});
  }
}
