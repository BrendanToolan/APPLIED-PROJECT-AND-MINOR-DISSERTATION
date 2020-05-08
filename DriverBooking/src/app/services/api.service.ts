import { Injectable, wtfStartTimeRange } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { isLoggedIn } from '../isloggedin';
import { Logout } from '../isloggedout';
import { booking } from '../model/booking';
import {bookingup} from '../model/bookingup';
import {Processed} from '../processed';

import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //AWS_Cloud: string = 'http://ec2-18-203-246-217.eu-west-1.compute.amazonaws.com:8081';
  //AWS_Cloud_book: string = 'http://ec2-18-203-246-217.eu-west-1.compute.amazonaws.com:8081/api/booking';
  Url: string = "http://localhost:8081/api/";
  bookUrl: string ="http://localhost:8081/api/booking";

  constructor(private http: HttpClient) { }

  //Contacts the server to get location data
  getLocation(): Observable<any> {
  // return this.http.get(this.AWS_Cloud + '/api/locations', {withCredentials: true});
    return this.http.get(this.Url + 'locations', {withCredentials: true});
  }

  getInstructor(): Observable<any> {
    return this.http.get(this.Url + 'instructors');
    //return this.http.get(this.AWS_Cloud + '/api/instructors');
  }

  
  getUsersDetails(): Observable<any> {
    return this.http.get(this.Url+ 'Login');
    //return this.http.get(this.AWS_Cloud + '/api/Login');
  }

  get(id: string) {
    return this.http.get(`${this.Url + 'instructors'}/${id}`);
   //return this.http.get(`${this.AWS_Cloud + '/api/instructors'}/${id}`);
  }

  getInstructorForBooking(id: number) {
     return this.http.get(`${this.Url + 'booking'}/${id}`);
    //return this.http.get(`${this.AWS_Cloud + '/api/booking'}/${id}`);
   }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>(this.Url + 'Login', {withCredentials: true});
    //return this.http.get<isLoggedIn>(this.AWS_Cloud + '/api/Login', {withCredentials: true});
  }

  logout(): Observable<Logout> {
    //return this.http.get<Logout>(this.AWS_Cloud + '/api/logout', {withCredentials: true});
    return this.http.get<Logout>(this.Url + 'logout', {withCredentials: true});
}

  
  MakeBooking(bid: number, InstructorName: String, email: String, bookingDate: String, startTime: String, endTime: String): Observable<Processed> {

    const book: booking = {
      bid: bid,
      InstructorName: InstructorName,
      email: email,
      bookingDate: bookingDate,
      startTime: startTime,
      endTime: endTime
    };

    return this.http.post<Processed>(this.bookUrl, book);
   // return this.http.post<Processed>(this.AWS_Cloud_book, book);
  }

  getAllBookingInfo(): Observable<any>{
    return this.http.get(this.Url +'bookings');
    //return this.http.get(this.AWS_Cloud + '/api/bookings');
  }

  deleteBookingByID(id: number): Observable<any>  {
    //return this.http.delete(`${this.AWS_Cloud +'/api/bookings'}/${id}`);
    return this.http.delete(`${this.Url +'bookings'}/${id}`);
} 

  UpdateBooking(id: number, bookingDate: String, startTime: String, endTime: String): Observable<Processed>{

    const book: bookingup = {
     // bid: bid,
      bookingDate: bookingDate,
      endTime: endTime,
      startTime: startTime
    };
    //return this.http.post<Processed>(`${this.AWS_Cloud +'/api/booking-update'}/${id}`, book);
    return this.http.post<Processed>(`${this.Url +'booking-update'}/${id}`, book);
  }

  getBookingID(id: number): Observable<any> {
    return this.http.get(`${this.Url + 'booking-update'}/${id}`);
   // return this.http.get(`${this.AWS_Cloud + '/api/booking-update'}/${id}`);
   }
}