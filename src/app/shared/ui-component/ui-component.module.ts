import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { BookCardComponent } from "./book-card/book-card.component";
@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class UIComponentModule {}
