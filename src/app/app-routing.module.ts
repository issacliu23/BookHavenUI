import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { PublishComponent } from './feature/publish/publish.component';
import { SignupComponent } from './feature/signup/signup.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
