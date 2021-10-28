import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookDTO } from "../core/models/bookdto.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Book } from "../core/models/book.model";
import { Chapter } from "../core/models/chapter.model";

@Injectable()
export class ChapterService {
    private BOOK_API = environment.API.BOOK_URL;
    private apiUrl = `${this.BOOK_API}/api/chapter`;

    constructor(private httpClient: HttpClient){}


    public getChapterById(chapterId: string): Observable<any> {  

        // return this.httpClient.get<any>(`${this.apiUrl}/stream/${chapterId}`,{responseType: 'blob' as 'json'});
        return this.httpClient.get(`${this.apiUrl}/content/${chapterId}`, {  responseType: 'blob' as 'json' });
    }

}