import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale.component';
import { SellerComponent } from './seller.component';
import { SellerFormComponent } from './seller-form.component';

const routes: Routes = [
  { path: 'sales', component: SaleComponent },
  { path: 'sellers', component: SellerComponent },
  { path: 'seller-form/:id', component: SellerFormComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
