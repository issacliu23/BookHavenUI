import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { UIComponentModule } from 'src/app/shared/ui-component/ui-component.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        UIComponentModule,
        RouterModule.forChild([
            {
                path:  '',
                component: HomeComponent
            }
        ])
    ],
    providers: [],
 })

export class HomeModule { }
