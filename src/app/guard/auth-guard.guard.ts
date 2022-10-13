import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.id){
      return true;
    }
    this.authService.logout();
    return false;
  }
  
}
