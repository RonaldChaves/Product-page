import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CakeComponent } from './home/cake/cake.component';
import { CandyComponent } from './home/candy/candy.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent,
    CandyComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent,
    CandyComponent
  ]
})
export class ComponentsModule { }
