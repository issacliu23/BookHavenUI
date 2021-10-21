import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AppUser } from "../core/models/user.model";
import { Observable } from "rxjs";


@Injectable()
export class UserService {
    private USER_API = environment.API.USER_URL;

    constructor(private httpClient: HttpClient){}

    register(user: AppUser): Observable<string> {

        const apiUrl = `${this.USER_API}/api/user/sign-up`;
        return this.httpClient.post<string>(apiUrl, user,  { responseType: 'text' as 'json'});

    }
}