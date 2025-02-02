import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrownieComponent } from './components/brownie/brownie.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormComponent } from './pages/form/form.component';


const routes: Routes = [
  // {
  //   path: '', component: HomeComponent, pathMatch: 'full'
  // },
  {
    path: '', component: FormComponent
  }
  ,{
    path: '**', component: NotFoundComponent
  },
  {
    path: 'brownies', component: BrownieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
