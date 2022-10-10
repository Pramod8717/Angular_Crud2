import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'signup',
    component:SignupComponent
  },

  {
    path: 'home',
    component:HomeComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'dialog',
    component:DialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
