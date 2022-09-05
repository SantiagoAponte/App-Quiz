import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifiedEmailComponent } from './verified-email/verified-email.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'forgetPassword', component:ForgetPasswordComponent},
  {path:'register', component:RegisterComponent},
  {path:'verifyEmail', component:VerifiedEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
