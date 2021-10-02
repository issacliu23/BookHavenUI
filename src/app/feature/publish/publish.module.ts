import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish.component';
import { UIComponentModule } from 'src/app/shared/ui-component/ui-component.module';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublishComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    UIComponentModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {
            path:  '',
            component: PublishComponent
        }
    ])
  ]
})
export class PublishModule { }
