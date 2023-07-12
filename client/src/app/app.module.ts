import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { RegisterComponent } from './component/user/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './service/user/user-service.service';
import { LoginComponent } from './component/user/login/login.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { OrderItemComponent } from './orderItem/order-item/order-item.component';
import { HomeComponent } from './home/home/home.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderItemComponent,
    HomeComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
