import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { E404Component } from './module/error/e404/e404.component';

const routes: Routes = [
  {
    path: ``,
    redirectTo : `auth`,
    pathMatch: 'full'
  },
  {
    path: `auth`,
    loadChildren: () => import(`./module/auth/auth.module`).then((module) => module.AuthModule)
  },
  {
    path: `task`,
    loadChildren: () => import(`./module/task/task.module`).then((module) => module.TaskModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: `error`,
    loadChildren: () => import(`./module/task/task.module`).then((module) => module.TaskModule)
  },
  {
    path : `**`,
    component: E404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
