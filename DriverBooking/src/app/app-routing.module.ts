import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { LoginComponent } from './login/login.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
  import { from } from 'rxjs';
import { BookingComponent } from './booking/booking.component';
import { RegisterPageComponent } from './register/register.component';
import { BookingDeatilsComponent } from './booking-deatils/booking-deatils.component';
import { HomeComponent } from './home/home.component';
import { BookingUpdateComponent } from './booking-update/booking-update.component';
//import { AuthGuard } from './auth-guard/auth-guard.component';
//import { HomeComponent } from './home/home.component';


const routes: Routes = [
 // {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  //{path: '**', redirectTo: ''},
  {path: 'locations', component: LocationListComponent},
  {path: 'instructors/:id', component: InstructorDetailsComponent},
  {path: 'instructors', component: InstructorComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'booking/:id', component: BookingComponent},
  {path: 'bookings', component: BookingDeatilsComponent},
  {path: 'register', component: RegisterPageComponent },
  {path: 'home', component: HomeComponent},
  {path: 'booking-update/:id', component: BookingUpdateComponent},
  {
   path: '',
   redirectTo: 'Login',
   pathMatch: 'full'
  },
  {
   path: '',
   redirectTo: 'locations',
   pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'instructors',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'instructors/:id',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'booking/:id',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'bookings',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'bookings/:id',
    pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
   },
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   },
   {
    path: '',
    redirectTo: 'booking-update/:id',
    pathMatch: 'full'
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
