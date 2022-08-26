import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './views/components/templeate/header/header.component';
import { FooterComponent } from './views/components/templeate/footer/footer.component';
import { NavComponent } from './views/components/templeate/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductAllComponent } from './views/components/product/product-all/product-all.component';
import { ProductFindFilterComponent } from './views/components/product/product-find-filter/product-find-filter.component';
import { OperatorCreateComponent } from './views/components/operator/operator-create/operator-create.component';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { RegisterComponent } from './views/components/register/register.component';
import { LoginComponent } from './views/components/login/login.component';
import { OperatorLoginComponent } from './views/components/operator/operator-login/operator-login.component';
import { ClientLoginComponent } from './views/components/client/client-login/client-login.component';
import { OperatorLogadoComponent } from './views/components/operator/operator-logado/operator-logado.component';
import { ProductMenuComponent } from './views/components/product/product-menu/product-menu.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard';
import { ProductCreateComponent } from './views/components/product/product-create/product-create.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ProductUpdateQuantityComponent } from './views/components/product/product-update-quantity/product-update-quantity.component';
import { ProductUpdatePriceComponent } from './views/components/product/product-update-price/product-update-price.component';
import { OperatorMenuComponent } from './views/components/operator/operator-menu/operator-menu.component';
import { OperatorUpdateResponsibilityComponent } from './views/components/operator/operator-update-responsibility/operator-update-responsibility.component';
import { OperatorDeleteComponent } from './views/components/operator/operator-delete/operator-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductAllComponent,
    ProductFindFilterComponent,
    OperatorCreateComponent,
    ClientCreateComponent,
    RegisterComponent,
    LoginComponent,
    OperatorLoginComponent,
    ClientLoginComponent,
    OperatorLogadoComponent,
    ProductMenuComponent,
    ProductCreateComponent,
    ProductUpdateQuantityComponent,
    ProductUpdatePriceComponent,
    OperatorMenuComponent,
    OperatorUpdateResponsibilityComponent,
    OperatorDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule, 
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [AuthService, AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
