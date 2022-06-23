import { AuthGuard } from './guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Loading2Component } from './components/loading2/loading2.component';
import { LoginComponent } from './components/login/login.component';

import { Login2Component } from './components/login2/login2.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
 /*
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
    component: HomeComponent
  },
  */
  {
    path: '',
    component:  LoginComponent

  },
  {
    path: 'inicio',
    component:  LoginComponent

  },
  
  
  {
    path: 'agregar',
    component: ApplyFormComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'loader',
    component: LoaderComponent

  },

 
  {
    path: 'registro',
    component: SignupComponent
  },
 
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
