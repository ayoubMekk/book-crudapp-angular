import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Location} from '@angular/common'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private dataService:DataService,private router:Router,private location:Location,private cookieService: CookieService) { }

  inValide:boolean=false

  ngOnInit() {
   
  }


  
  login(user){
    this.dataService.login(user).subscribe(u => {
      console.log(u)
      if (u[0].length != 0) {

        this.cookieService.set( 'iduser', u[0]._id );
        this.cookieService.set( 'username', u[0].username );
      //  localStorage.setItem("iduser" , u[0]._id);
        //localStorage.setItem("username" , u[0].username);
        location.replace("")
        /*
        this.router.navigateByUrl('/login', {skipLocationChange:true}).then(()=>{
          this.router.navigate(['/'])
          
        })
        */
       
      } else {
         this.inValide = true
      }
    });
    
 

  }

}
