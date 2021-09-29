import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

/**
 * decorator NgModule
 */
@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class CustomMaterialModule {}
