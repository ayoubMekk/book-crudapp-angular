import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Location} from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private dataService:DataService,private router:Router,private location:Location) { }

  inValide:boolean=false

  ngOnInit() {
   
  }


  
  login(user){
    this.dataService.login(user).subscribe(u => {
      if (u.length != 0) {
        localStorage.setItem("iduser" , u[0]._id);
        localStorage.setItem("username" , u[0].username);
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
