import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrownieComponent } from './brownie/brownie.component';
import { CakeBirthdayComponent } from './cake-birthday/cake-birthday.component';
import { CakeComponent } from './cake/cake.component';
import { CandyComponent } from './candy/candy.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { DonutsComponent } from './donuts/donuts.component';





@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CakeComponent,
    CandyComponent,
    CupcakeComponent,
    CakeBirthdayComponent,
    BrownieComponent,
    DonutsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], exports: [
    NavBarComponent,
    FooterComponent,
    CakeComponent,
    CandyComponent,
    CupcakeComponent,
    CakeBirthdayComponent,
    BrownieComponent,
    DonutsComponent,
  ]
})
export class ComponentsModule { }
