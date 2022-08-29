import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientLogadoComponent } from './views/components/client/client-logado/client-logado.component';
import { ClientLoginComponent } from './views/components/client/client-login/client-login.component';
import { HomeComponent } from './views/components/home/home.component';
import { LoginComponent } from './views/components/login/login.component';
import { OperatorCreateComponent } from './views/components/operator/operator-create/operator-create.component';
import { OperatorDeleteComponent } from './views/components/operator/operator-delete/operator-delete.component';
import { OperatorLogadoComponent } from './views/components/operator/operator-logado/operator-logado.component';
import { OperatorLoginComponent } from './views/components/operator/operator-login/operator-login.component';
import { OperatorMenuComponent } from './views/components/operator/operator-menu/operator-menu.component';
import { OperatorUpdateResponsibilityComponent } from './views/components/operator/operator-update-responsibility/operator-update-responsibility.component';
import { ProductAllComponent } from './views/components/product/product-all/product-all.component';
import { ProductCreateComponent } from './views/components/product/product-create/product-create.component';
import { ProductFindFilterComponent } from './views/components/product/product-find-filter/product-find-filter.component';
import { ProductMenuComponent } from './views/components/product/product-menu/product-menu.component';
import { ProductUpdatePriceComponent } from './views/components/product/product-update-price/product-update-price.component';
import { ProductUpdateQuantityComponent } from './views/components/product/product-update-quantity/product-update-quantity.component';
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
    path: 'client-logado',
    component: ClientLogadoComponent,
    canActivate:[AuthGuardService]
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
    canActivate:[AuthGuardService]
  },
  {
    path: 'operator-menu',
    component: OperatorMenuComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'operator-updateResponsibility',
    component: OperatorUpdateResponsibilityComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'operator-dismiss',
    component: OperatorDeleteComponent,

  },
  {
    path: 'product-menu',
    component: ProductMenuComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'product-create',
    component: ProductCreateComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'product-addStock',
    component: ProductUpdateQuantityComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'product-attPrice',
    component: ProductUpdatePriceComponent,
    canActivate:[AuthGuardService]
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
