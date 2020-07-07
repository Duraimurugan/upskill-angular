import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SwitchComponent } from './switch/switch.component';
import { BankAccountComponent } from './bank-account/bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    SwitchComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
