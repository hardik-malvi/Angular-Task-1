import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    this.authService.register(f.value.email, f.value.password).then(res => {
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
