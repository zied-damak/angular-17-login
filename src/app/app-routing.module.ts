import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginRegisterComponent} from "./login-register/login-register.component";

const routes: Routes = [
  { path: 'login', component: LoginRegisterComponent},
  { path: 'forgot-password', component: LoginRegisterComponent},
  { path: 'register', component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
