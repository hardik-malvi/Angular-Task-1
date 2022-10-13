import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.authService.login(f.value.email, f.value.password).then((res: any) => {
      localStorage.setItem(`user`, JSON.stringify({
        email: res.user.email,
        id: res.user.uid
      }));
      this.router.navigateByUrl("/task");
    }).catch(error => {
      alert("User id or password Invalid.")
    })
  }
}
