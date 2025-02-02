import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../components/components.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    ComponentsModule
  ], exports: [
    HomeComponent,
    NotFoundComponent, 
    FormComponent
  ]
})
export class PagesModule { }
