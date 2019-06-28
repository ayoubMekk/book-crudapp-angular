import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  inValide:boolean=false
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }


  
  register(user){
    this.dataService.register(user).subscribe(u => {
      if (u != null ) {
        this.router.navigateByUrl('/register', {skipLocationChange:true}).then(()=>{
          this.router.navigate(['/login'])
        })
      } else {
         this.inValide = true
      }

    });

  }
}
