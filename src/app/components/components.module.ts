import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CakeComponent } from './home/cake/cake.component';
import { CandyComponent } from './home/candy/candy.component';
import { CupcakeComponent } from './home/cupcake/cupcake.component';
import { CakeBirthdayComponent } from './home/cake-birthday/cake-birthday.component';
import { BrownieComponent } from './home/brownie/brownie.component';
import { DonutsComponent } from './home/donuts/donuts.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent,
    CandyComponent,
    CupcakeComponent,
    CakeBirthdayComponent,
    BrownieComponent,
    DonutsComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CakeComponent,
    CandyComponent,
    CupcakeComponent,
    CakeBirthdayComponent,
    BrownieComponent,
    DonutsComponent
  ]
})
export class ComponentsModule { }
