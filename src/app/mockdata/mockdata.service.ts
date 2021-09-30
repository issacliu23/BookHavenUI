import { Injectable } from "@angular/core";
import { BookDTO } from "../core/models/bookdto.model";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }



  getMockBooks(): BookDTO[] {
    let authorName = "Haruki Murakami";
    let books: BookDTO[] = [];
    let book1: BookDTO = new BookDTO();
    book1.bookTitle = "1Q84";
    book1.review = 5.0;
    book1.authorName = authorName;
    book1.updatedDate = new Date(); 

    let book2: BookDTO = new BookDTO();
    book2.bookTitle = "Norwegian Wood";
    book2.review = 4.0;
    book2.authorName = authorName;
    book2.updatedDate = new Date(); 
    
    let book3: BookDTO = new BookDTO();
    book3.bookTitle = "The Wind-Up Bird";
    book3.review = 4.3;
    book3.authorName = authorName;
    book3.updatedDate = new Date(); 

    let book4: BookDTO = new BookDTO();
    book4.bookTitle = "Killing Commendatore";
    book4.review = 3.6;
    book4.authorName = authorName;
    book4.updatedDate = new Date(); 

    let book5: BookDTO = new BookDTO();
    book5.bookTitle = "Men Without Women";
    book5.review = 4.9;
    book5.authorName = authorName;
    book5.updatedDate = new Date(); 

    let book6: BookDTO = new BookDTO();
    book6.bookTitle = "Hear the wind sing";
    book6.review = 4.2;
    book6.authorName = authorName;
    book6.updatedDate = new Date(); 

    books.push(book1);
    books.push(book2);
    books.push(book3);
    books.push(book4);
    books.push(book5);
    books.push(book6);

    return books;
  }


  


}
