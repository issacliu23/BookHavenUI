import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { BookCardComponent } from "./book-card/book-card.component";
@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class UIComponentModule {}
