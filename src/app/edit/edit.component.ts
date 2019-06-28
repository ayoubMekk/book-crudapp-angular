import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Book } from 'Book';
import { DataService } from '../data.service';
import { NullInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:String;
  book:Book;
  title1:String;
  author1:String;
  category1:String;
  rating1:number;
  user;

  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) { }

  ngOnInit() {
     this.id=this.route.snapshot.paramMap.get('id');
     this.user = localStorage.getItem("iduser")
   
     this.dataService.getBookById(this.id,this.user).subscribe(b => {
        this.book = b[0];
        this.title1 = this.book.title;
        this.author1 = this.book.author;
        this.category1 = this.book.category;
        this.rating1 = this.book.rating;
   
     })
     
  }

  submitForm(book:Book){
      this.dataService.updateBook(book,this.id, this.user).subscribe(b => {

      })

   this.router.navigate(['/'])
  }

}
