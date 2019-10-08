import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationadminComponent } from './registrationadmin/registrationadmin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { OperatorComponent } from './operator/operator.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent, RegistrationadminComponent,RegistrationComponent, AddadminComponent, OperatorComponent, ProfileComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  
  ]
})
export class AccountModule { }
