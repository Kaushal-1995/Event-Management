import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginPageComponent } from './login/login-page.component';


const routes: Routes = [
  {path : 'home', component : HomePageComponent, canActivate: [AuthGuardService]},
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'login', component : LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
