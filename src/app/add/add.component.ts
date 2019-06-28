import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
  }

  submitForm(book){
   
    this.dataService.addBook(book).subscribe(book => {
    });
    
    this.router.navigate(['/'])

  }


}
