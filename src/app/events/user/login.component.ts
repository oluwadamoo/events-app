import { loginForm, LoginFormI } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-login',
  templateUrl: 'login.component.html',
  styles:[`
  em{float:right; padding-left:10px; color:#E05C65}
  `]
})

export class LoginComponent implements OnInit {
  mouseoverLogin:boolean;
  loginFormModel:LoginFormI = loginForm
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() { }
  login(){
    this.authService.loginUser(this.loginFormModel.userName, this.loginFormModel.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events'])
  }
}
