import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Book } from "../core/models/book.model";
import { Chapter } from "../core/models/chapter.model";
import { ChapterPurchase } from "../core/models/chapterPurchase.model";

@Injectable()
export class PaymentService {
    private PAYMENT_API = environment.API.PAYMENT_URL;
    private apiUrl = `${this.PAYMENT_API}/api/chapterPurchase`;

    constructor(private httpClient: HttpClient){}


    public purchaseChapter(chapter: Chapter): Observable<ChapterPurchase> {
        return this.httpClient.post<ChapterPurchase>(this.apiUrl, chapter);

    }
}