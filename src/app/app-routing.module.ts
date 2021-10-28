import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './feature/book/book.component';
import { ChapterComponent } from './feature/chapter/chapter.component';
import { HomeComponent } from './feature/home/home.component';
import { PublishComponent } from './feature/publish/publish.component';
import { SignupComponent } from './feature/signup/signup.component';
import { WalletComponent } from './feature/wallet/wallet.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'publish', 
    component: PublishComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'view/chapter',
    component: ChapterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
