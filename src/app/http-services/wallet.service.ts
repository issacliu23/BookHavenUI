import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookDTO } from "../core/models/bookdto.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Book } from "../core/models/book.model";
import { Wallet } from "../core/models/wallet.model";

@Injectable()
export class WalletService {
    private PAYMENT_API = environment.API.PAYMENT_URL;
    private apiUrl = `${this.PAYMENT_API}/api/wallet`;

    constructor(private httpClient: HttpClient){}

    public getWallet(): Observable<Wallet> {
        return this.httpClient.get<Wallet>(this.apiUrl);
    }

    public topUpWallet(points: number): Observable<Wallet> {

        return this.httpClient.post<Wallet>(`${this.apiUrl}/topUp`, points);
    }
    public withdrawWallet(points: number): Observable<Wallet> {
        return this.httpClient.post<Wallet>(`${this.apiUrl}/withdraw`, points );
    }

}