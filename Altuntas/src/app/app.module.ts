import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { SaleComponent } from './sale.component';
import { SellerComponent } from './seller.component';
import { SellerFormComponent } from './seller-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, SaleComponent, SellerComponent, SellerFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, DataTablesModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
