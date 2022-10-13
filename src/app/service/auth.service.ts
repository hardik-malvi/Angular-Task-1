import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) { }

  /**
   * Login Function 
   * @param email 
   * @param password 
   * @returns 
   */
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Register Function
   * @param email 
   * @param password 
   * @returns 
   */
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Logout function
   */
  logout() {
    signOut(this.auth).then(() => {
      localStorage.clear();
      this.router.navigateByUrl('/auth/login');
    }).catch((error) => {
      console.log(error);
    });

  }
}
