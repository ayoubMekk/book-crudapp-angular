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

const logged = localStorage.getItem("iduser")
const homeComponent = logged != null ? HomeComponent : LoginComponent
console.log("logged ?" +logged)

const routes: Routes = [
  { path:"", component: logged != null ? HomeComponent : LoginComponent},
  { path:"register", component: RegisterComponent}, 
  { path:"login" , component:logged != null ? HomeComponent : LoginComponent},
  { path:"add", component:logged != null ?  AddComponent :LoginComponent},
  { path:"edit/:id", component:  logged != null ? EditComponent :LoginComponent},
  { path:"contact", component: AboutComponent},
  { path:"**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
