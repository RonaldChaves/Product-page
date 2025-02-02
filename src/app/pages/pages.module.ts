import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../components/components.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    FormComponent,
    ComponentsPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ], exports: [
    HomeComponent,
    NotFoundComponent, 
    FormComponent,
    ComponentsPageComponent
  ]
})
export class PagesModule { }
