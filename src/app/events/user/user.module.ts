import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { userRoute } from "./user.route";

@NgModule({
  declarations:[ProfileComponent, LoginComponent],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoute),

  ],
  providers:[]
})

export class UserModule{}
