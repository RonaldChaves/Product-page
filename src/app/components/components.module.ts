import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CakeComponent } from './home/cake/cake.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent
  ]
})
export class ComponentsModule { }
