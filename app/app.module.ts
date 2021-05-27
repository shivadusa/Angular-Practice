import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductCartComponent } from './Components/product-cart/product-cart.component';
import { ProductPaymentComponent } from './Components/product-payment/product-payment.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCartComponent,
    ProductPaymentComponent,
    PagenotfoundComponent,
    DashboardComponent,
    EmployeeAddComponent,
    StudentListComponent,
 
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
