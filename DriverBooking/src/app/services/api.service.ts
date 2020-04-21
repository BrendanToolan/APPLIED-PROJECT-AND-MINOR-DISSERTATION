import { Injectable, wtfStartTimeRange } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { isLoggedIn } from '../isloggedin';
import { Logout } from '../isloggedout';
import { booking } from '../model/booking';
import {bookingup} from '../model/bookingup';

import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //AWS_Cloud: string = 'http://ec2-34-245-42-129.eu-west-1.compute.amazonaws.com:8081';
  //AWS_Cloud_book: string = 'http://ec2-34-245-42-129.eu-west-1.compute.amazonaws.com:8081/api/booking';
  // AWS_Cloud: string = 'http://ec2-34-245-42-129.eu-west-1.compute.amazonaws.com:8081';
  // AWS_Cloud_book: string = 'http://ec2-34-245-42-129.eu-west-1.compute.amazonaws.com:8081/api/booking';
  Url: string = "http://localhost:8081/api/";
  bookUrl: string ="http://localhost:8081/api/booking";

  constructor(private http: HttpClient) { }

  //Contacts the server to get location data
  getLocation(): Observable<any> {
   //return this.http.get(this.AWS_Cloud + '/api/locations', {withCredentials: true});
    return this.http.get(this.Url + 'locations', {withCredentials: true});
  }

  getInstructor(): Observable<any> {
    return this.http.get(this.Url + 'instructors');
    //return this.http.get(this.AWS_Cloud + '/api/instructors');
  }

  
  getUsersDetails(): Observable<any> {
    return this.http.get(this.Url+ 'api/Login');
  }

  get(id: string) {
   // return this.http.get(`${this.Url + 'instructors'}/${InstructorId}`);
    return this.http.get(`${this.Url + 'instructors'}/${id}`);
   //return this.http.get(`${this.AWS_Cloud + '/api/instructors'}/${id}`);
  }

  getBookingID(id: number): Observable<any> {
    // return this.http.get(`${this.Url + 'instructors'}/${InstructorId}`);
     return this.http.get(`${this.Url + 'booking-update'}/${id}`);
    //return this.http.get(`${this.AWS_Cloud + '/api/instructors'}/${id}`);
   }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>(this.Url + 'api/Login', {withCredentials: true});
    //return this.http.get<isLoggedIn>(this.AWS_Cloud + '/api/Login', {withCredentials: true});
  }

  logout(): Observable<Logout> {
   // return this.http.get<Logout>(this.AWS_Cloud + '/api/logout', {withCredentials: true});
    return this.http.get<Logout>(this.Url + '/api/logout', {withCredentials: true});
}

  
  MakeBooking(bid: number, InstructorName: String, email: String, bookingDate: String, startTime: String, endTime: String): Observable<booking> {

    const book: booking = {
      bid: bid,
      InstructorName: InstructorName,
      email: email,
      bookingDate: bookingDate,
      startTime: startTime,
      endTime: endTime
    };

    return this.http.post<booking>(this.bookUrl, book);
  }

  getAllBookingInfo(): Observable<any>{
   // return this.http.get(this.Url +'bookings');
    return this.http.get(this.Url + 'bookings');
  }

  deleteBookingByID(id: number): Observable<any>  {
    //return this.http.delete(`${this.Url +'bookings'}/${id}`);
    return this.http.delete(`${this.Url +'bookings'}/${id}`);
   // return this.http.delete(this.Url + 'bookings/' + id);
}// end delete subject function

  UpdateBooking(id: number, bookingDate: String, endTime: String, startTime: String): Observable<any>{

    const book: bookingup = {
      bookingDate: bookingDate,
      endTime: endTime,
      startTime: startTime
    };
    return this.http.put(this.Url + 'bookings/'+ id, book);
  }
}