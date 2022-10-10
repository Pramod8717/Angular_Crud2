import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  // public loginForm! : FormGroup
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authgaurd: AuthGuard
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
    });
    console.log(localStorage.getItem('dataSource'));
    if (localStorage.getItem('dataSource')) {
      this.router.navigate(['home']);
    }
    this.loginForm = this.formbuilder.group({
      email :["",Validators.required, Validators.email],
      password :["",Validators.required]
    })
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login successfully');
          localStorage.setItem('dataSource', JSON.stringify(user));
          this.loginForm.reset();
          this.router.navigate(['home']);
        } else {
          alert('User not found');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
