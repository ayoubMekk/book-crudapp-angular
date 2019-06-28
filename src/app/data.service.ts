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


  url = "https://ayoub-mekk-bookapp.herokuapp.com"

  constructor(private http:HttpClient) { }
  

  register(user:User):Observable<User>{
    return this.http.post<User>( this.url + "/register",user,httpOption)
  }

  login(user:User):Observable<User>{
    return this.http.post<User>(this.url +"/login",user,httpOption)
  }


  getBooks(user):Observable<Book[]>{
      return this.http.get<Book[]>(this.url +"/books/" + user,httpOption);
  }

  getBooks2(p,user):Observable<Book[]>{
    return this.http.get<any[]>( this.url +"/pbooks/" + user + "?page=" + p+"&size=5",httpOption);
  }


 
  getBookById(id,user):Observable<Book>{
    return this.http.get<Book>(this.url +"/books/"+ user + "/" + id,httpOption);
}

  addBook(book:Book):Observable<Book>{
    let user = localStorage.getItem("iduser");
    book.user  = user
     return this.http.post<Book>(this.url +"/books",book,httpOption)
  }

  updateBook(book:Book, id,user):Observable<Book>{
    return this.http.put<Book>(this.url +"/books/" + user + "/" + id ,book,httpOption)
  }

  deleteBook(id,user):Observable<any>{
    return this.http.delete<any>(this.url +"/books/" + user + "/" + id,httpOption)
  }
}
