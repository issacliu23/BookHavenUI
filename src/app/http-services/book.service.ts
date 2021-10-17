import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookDTO } from "../core/models/bookdto.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Book } from "../core/models/book.model";

@Injectable()
export class BookService {
    private BOOK_API = environment.API.BOOK_URL;

    constructor(private httpClient: HttpClient){}

    public getAllBooks(): Observable<BookDTO[]> {
        const apiUrl = `${this.BOOK_API}/book`;
        return this.httpClient.get<BookDTO[]>(apiUrl);
    }

    public getBookById(bookId: string): Observable<BookDTO> {
        const apiUrl = `${this.BOOK_API}/book/${bookId}`;
        return this.httpClient.get<BookDTO>(apiUrl);
    }

    public publishBook(book: any, coverImage: File): Observable<Book> {
        const apiUrl = `${this.BOOK_API}/book`;
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.set('Accept', 'application/json');

        const formData = new FormData();

          // Optional, append other kev:val rest data to the form.
        Object.keys(book).forEach(key => {
            if(key !== "coverImage") {
                formData.append(key, book[key]);
            }
        });
        formData.append('image', coverImage);

        return this.httpClient.post<Book>(apiUrl, formData, { headers: headers });

    }
}