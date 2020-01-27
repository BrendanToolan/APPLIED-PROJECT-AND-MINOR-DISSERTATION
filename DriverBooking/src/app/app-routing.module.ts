import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { LoginComponent } from './login/login.component';
  import { from } from 'rxjs';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'locations', component: LocationListComponent},
  {path: 'instructors', component: InstructorComponent},
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
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
