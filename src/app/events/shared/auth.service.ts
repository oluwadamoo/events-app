import { UserI } from './../user/user.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class AuthService{
  currentUser:UserI;
  loginUser(userName:string, password:string){
    this.currentUser ={
      id:1,
      userName:userName,
      firstName:'John',
      lastName:'Doe'
    }
  }

  isAuthenticated(){
    return !!this.currentUser
  }

  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
