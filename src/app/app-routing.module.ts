import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { OperatorCreateComponent } from './views/components/operator/operator-create/operator-create.component';
import { ProductAllComponent } from './views/components/product/product-all/product-all.component';
import { ProductFindFilterComponent } from './views/components/product/product-find-filter/product-find-filter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductAllComponent
  },
  {
    path: 'shirts',
    component: ProductFindFilterComponent
  },
  {
    path: 'register',
    component: OperatorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
