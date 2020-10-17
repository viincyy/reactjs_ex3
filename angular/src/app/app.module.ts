import { TwowayBindingModule } from './twoway-binding/twoway-binding.module';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OneWayBindingModule, TwowayBindingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
