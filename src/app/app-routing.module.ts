import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    pathMatch: 'full', 
    loadChildren: () => import('src/app/feature/home/home.module').then(mod => mod.HomeModule)
  },
  { 
    path: 'publish', 
    pathMatch: 'full', 
    loadChildren: () => import('src/app/feature/publish/publish.module').then(mod => mod.PublishModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
