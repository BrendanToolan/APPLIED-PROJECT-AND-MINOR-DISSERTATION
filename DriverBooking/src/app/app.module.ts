import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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


@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    HeaderComponent,
    InstructorComponent,
    LoginComponent
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
    MatFormFieldModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
