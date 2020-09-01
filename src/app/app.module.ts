import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceComponent } from './pages/balance/balance.component';
import { DepositComponent } from './pages/deposit/deposit.component';  
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoDigitDecimalNumberDirective } from './shared/directives/two-digit-decimal-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WithdrawComponent,
    HomeComponent,                                        
    BalanceComponent,
    DepositComponent,
    TwoDigitDecimalNumberDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
