import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';


const routes: Routes = [
  {
    path: 'locations',
    component: LocationListComponent
  },
  {
   path: '',
   redirectTo: 'locations',
   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
