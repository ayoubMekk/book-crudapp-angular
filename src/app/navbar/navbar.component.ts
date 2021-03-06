import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string=""
  logged:boolean
  

  constructor(private router:Router,private location:Location,  private cookieService: CookieService) { }

  ngOnInit() {
   this.username =localStorage.getItem("username");
    this.logged = localStorage.getItem('iduser') != null ;
  }

  logout(){
    localStorage.clear()
    location.replace("/login")
  }
}
