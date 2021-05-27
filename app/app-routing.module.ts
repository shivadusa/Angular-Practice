import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from './Components/product-cart/product-cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPaymentComponent } from './Components/product-payment/product-payment.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  // {path:'',redirectTo:'/products',pathMatch:'full'},//This is another way 
  {path:'',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'productcart',component:ProductCartComponent},
  {path:'productpayment',component:ProductPaymentComponent},
  {path:'UIDashboard',component:DashboardComponent},
  {path:'EmployeeData',component:EmployeeAddComponent},
  {path:'StudentData',component:StudentListComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
