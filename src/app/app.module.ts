import { ErrorService } from './interceptors/error.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Loading2Component } from './components/loading2/loading2.component';
import { LoginComponent } from './components/login/login.component';

//Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Login2Component } from './components/login2/login2.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplyFormComponent,
    LoaderComponent,
    Loading2Component,
    LoginComponent,
    Login2Component,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    NgxTippyModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorService,
      multi: true
    },
    // JWT
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
