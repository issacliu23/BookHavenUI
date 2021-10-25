import { Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private totalRequests = 0;
  private excludedUrlsRegex: RegExp[];
  private excludedUrls = [ ".svg" ]; 

  constructor(private router: Router, private spinner: NgxSpinnerService, private utilService: UtilService) { 
    this.excludedUrlsRegex = this.excludedUrls.map(urlPattern => new RegExp(urlPattern, 'i')) || [];
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const passThrough: boolean = !!this.excludedUrlsRegex.find(regex => regex.test(req.url));
    let token = '';
    if (passThrough) {
      return next.handle(req);
    }

    this.totalRequests++;
    this.showLoader();
    if(this.utilService.getToken()) {
      token = `Bearer ${this.utilService.getToken()}`;
    }
    const authReq = req.clone({ setHeaders: 
      { 
        Authorization: token, 
        // Support for IE11
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        'If-Modified-Since': '0'
      } 
    });
    return next.handle(authReq).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.hideLoader();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.hideLoader();
        return throwError(error);
      })
    );
  }
 
  private showLoader(): void {
    this.spinner.show();
  }
  private hideLoader(): void {
    this.spinner.hide();
  }
}
