import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientLoginComponent } from './views/components/client/client-login/client-login.component';
import { HomeComponent } from './views/components/home/home.component';
import { LoginComponent } from './views/components/login/login.component';
import { OperatorCreateComponent } from './views/components/operator/operator-create/operator-create.component';
import { OperatorLogadoComponent } from './views/components/operator/operator-logado/operator-logado.component';
import { OperatorLoginComponent } from './views/components/operator/operator-login/operator-login.component';
import { ProductAllComponent } from './views/components/product/product-all/product-all.component';
import { ProductFindFilterComponent } from './views/components/product/product-find-filter/product-find-filter.component';
import { RegisterComponent } from './views/components/register/register.component';

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
    component: RegisterComponent
  },
  {
    path: 'client-create',
    component: ClientCreateComponent
  },
  {
    path: 'client-login',
    component: ClientLoginComponent
  },
  {
    path: 'operator-create',
    component: OperatorCreateComponent
  },
  {
    path: 'operator-login',
    component: OperatorLoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'operator-logado',
    component: OperatorLogadoComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
