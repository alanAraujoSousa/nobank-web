import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceComponent } from './balance/balance.component';  
import { DepositComponent } from './deposit/deposit.component';  
import { WithdrawComponent } from './withdraw/withdraw.component';  
import { HomeComponent } from './home/home.component';  
  
const routes: Routes = [  
   { path: "", pathMatch: "full", redirectTo: "home" },  
   { path: "home", component: HomeComponent },  
   { path: "balance", component: BalanceComponent },  
   { path: "deposit", component: DepositComponent },  
   { path: "withdraw", component: WithdrawComponent }  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
