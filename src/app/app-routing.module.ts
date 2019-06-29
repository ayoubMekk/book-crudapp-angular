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



const routes: Routes = [
  { path:"", component: localStorage.getItem("iduser") != null ? HomeComponent : LoginComponent},
  { path:"register", component: RegisterComponent}, 
  { path:"login" , component:  LoginComponent},
  { path:"add", component:localStorage.getItem("iduser") != null ?  AddComponent :LoginComponent},
  { path:"edit/:id", component:  localStorage.getItem("iduser") != null ? EditComponent :LoginComponent},
  { path:"contact", component: AboutComponent},
  { path:"**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
