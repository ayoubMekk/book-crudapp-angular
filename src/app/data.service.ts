import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, bindCallback } from 'rxjs';
import { Book } from 'Book';
import { User } from 'User';


const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http:HttpClient) { }
  

  register(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:3000/register",user,httpOption)
  }

  login(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:3000/login",user,httpOption)
  }


  getBooks(user):Observable<Book[]>{
      return this.http.get<Book[]>("http://localhost:3000/books/" + user,httpOption);
  }

  getBooks2(p,user):Observable<Book[]>{
    return this.http.get<any[]>("http://localhost:3000/pbooks/" + user + "?page=" + p+"&size=5",httpOption);
  }


 
  getBookById(id,user):Observable<Book>{
    return this.http.get<Book>("http://localhost:3000/books/"+ user + "/" + id,httpOption);
}

  addBook(book:Book):Observable<Book>{
    let user = localStorage.getItem("iduser");
    book.user  = user
     return this.http.post<Book>("http://localhost:3000/books",book,httpOption)
  }

  updateBook(book:Book, id,user):Observable<Book>{
    return this.http.put<Book>("http://localhost:3000/books/" + user + "/" + id ,book,httpOption)
  }

  deleteBook(id,user):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/books/" + user + "/" + id,httpOption)
  }
}
