import { IToastr, TOASTR_TOKEN } from './../common/toastr.service';
import { ProfileFormI } from './user.model';
import { Component, Inject, OnInit } from '@angular/core'
import{FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector:'app.profile',
  templateUrl:'profile.component.html',
  styles:[`
  em{float:right; padding-left:10px; color:#E05C65}
  .error input{background-color:#E3C3E5}
  input.ng-valid{background-color:#E3C3E5}
  `]
})

export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;
  constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:IToastr){}

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }

  onSave(formValues:ProfileFormI){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events'])
      this.toastr.success('Profile Saved')
    }
  }

  isValidFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  isValidLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  onCancel(){
    this.router.navigate(['events'])
  }

}
