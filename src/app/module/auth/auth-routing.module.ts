import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from '../error/e404/e404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: ``,
    redirectTo: `login`,
    pathMatch: 'full'
  },
  {
    path: `login`,
    component: LoginComponent
  },
  {
    path: `register`,
    component: RegisterComponent
  },
  {
    path : `**`,
    component: E404Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
