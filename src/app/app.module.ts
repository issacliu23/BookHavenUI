import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { BookCardComponent } from './shared/ui-component/book-card/book-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './feature/login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilService } from './services/util.service';
import { SignupComponent } from './feature/signup/signup.component';
import { CommonModule } from '@angular/common';
import { UIComponentModule } from './shared/ui-component/ui-component.module';
import { PublishComponent } from './feature/publish/publish.component';
import { WalletComponent } from './feature/wallet/wallet.component';
import { BookComponent } from './feature/book/book.component';
import { BookService } from './http-services/book.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './http-services/user.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpInterceptorService } from './core/interceptor/http-interceptor.service';
import { WalletService } from './http-services/wallet.service';
import { WalletDialogComponent } from './feature/wallet/wallet-dialog/wallet-dialog.component';
import { EventService } from './services/event.service';
import { DialogComponent } from './shared/dialog/dialog.component';
import { PaymentService } from './http-services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginDialogComponent,
    SignupComponent,
    PublishComponent,
    HomeComponent,
    WalletComponent,
    BookComponent,
    WalletDialogComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UIComponentModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [UtilService, BookService, UserService, WalletService, EventService, PaymentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
