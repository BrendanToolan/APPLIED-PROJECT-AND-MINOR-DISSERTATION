import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './navigation/header/header.component';
import { RegisterPageComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorComponent } from './instructor/instructor/instructor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule , MatCardModule, MatGridListModule, MatFormFieldModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { AlertsModule } from 'angular-alert-module';


//import { AuthGuard } from './auth-guard/auth-guard.component';
//import { AuthService } from './services/auth.service';
//import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    HeaderComponent,
    InstructorComponent,
    LoginComponent,
    InstructorDetailsComponent,
    BookingComponent,
    FooterComponent,
    RegisterPageComponent
    //AuthGuard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule
    //AlertsModule.forRoot(),
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
