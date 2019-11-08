import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfStoresComponent } from './components/list-of-stores/list-of-stores.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { NewprodComponent } from './components/newprod/newprod.component';
import { UpdateprodComponent } from './components/updateprod/updateprod.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'list-of-stores',
    component: ListOfStoresComponent
  },
  {
    path: 'list-of-products',
    component: ListOfProductsComponent
  },
  {
    path: 'newprod',
    component: NewprodComponent
  },
  {
    path: 'updateprod',
    component: UpdateprodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
