import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DataService } from '../data.service';
import { Book } from 'Book';
import { Router } from '@angular/router';
import { Location} from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router, private location:Location) { }

  books:Book[];
  pages=[];
  s:number;
  i=0;
  user;


  ngOnInit() {
    this.user = localStorage.getItem("iduser")
    this.dataService.getBooks(this.user).subscribe(data => {
      this.s =  Math.ceil(data.length/5);
      for(let i=1;i<= this.s ; i++ ) {
        this.pages.push(i)
      
      }
   
      
    })

   
    
    this.dataService.getBooks2(1,this.user).subscribe(data => {
      this.books = data.docs;
    })

  
  }

  delete(id){
  
    this.dataService.deleteBook(id,this.user).subscribe(data => {
  
    });

    location.reload()
  }

  paginate(page){

    this.dataService.getBooks2(page,this.user).subscribe(data => {
      this.books = data.docs;
    }
    )
    
}


}
