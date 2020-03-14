import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { LoginComponent } from './login/login.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
  import { from } from 'rxjs';
import { BookingComponent } from './booking/booking.component';
import { RegisterPageComponent } from './register/register.component';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'locations', component: LocationListComponent},
  {path: 'instructors/:id', component: InstructorDetailsComponent},
  {path: 'instructors', component: InstructorComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'register', component: RegisterPageComponent },
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
    redirectTo: 'register',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }