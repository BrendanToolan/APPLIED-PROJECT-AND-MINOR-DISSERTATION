import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './navigation/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule , MatCardModule, MatGridListModule, MatFormFieldModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { LoginComponent } from './login/login.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { BookingComponent } from './booking/booking.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService} from '@syncfusion/ej2-angular-schedule';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RegisterPageComponent } from './register/register.component';
//import { AuthGuard } from './auth-guard/auth-guard.component';
import { AuthService } from './services/auth.service';
//import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from 'src/app/auth-guard/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/auth-guard/error.interceptor';
import { FakeBackendInterceptor, fakeBackendProvider } from 'src/app/auth-guard/fake.backend';
import { AlertsModule } from 'angular-alert-module';
import { LayoutModule } from '@angular/cdk/layout';

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
    RegisterPageComponent,
    HomeComponent
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
    ScheduleModule, RecurrenceEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AlertsModule.forRoot(),
    LayoutModule
  ],
  providers: [ApiService, DayService, WeekService, WorkWeekService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
