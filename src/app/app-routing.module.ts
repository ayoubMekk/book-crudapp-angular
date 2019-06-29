import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './auth-guard-service.service';



const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"register", component: RegisterComponent}, 
  { path:"login" , component: HomeComponent , canActivate: [AuthGuardService]},
  { path:"add", component: AddComponent , canActivate: [AuthGuardService]},
  { path:"edit/:id", component: EditComponent , canActivate: [AuthGuardService]},
  { path:"contact", component: AboutComponent},
  { path:"**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})


export class AppRoutingModule {

 
  
 }
