import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    HomeComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   ,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
