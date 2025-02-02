import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormComponent } from './pages/form/form.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },

  {
    path: ':type',
    component: ComponentsPageComponent
  },
  {
    path: '404',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
