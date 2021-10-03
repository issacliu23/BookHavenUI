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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginDialogComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
