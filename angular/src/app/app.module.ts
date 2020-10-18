import { DirectiveModule } from './directive/directive.module';
import { TwowayBindingModule } from './twoway-binding/twoway-binding.module';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTapBindingComponent } from './bai-tap-binding/bai-tap-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, BaiTapBindingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OneWayBindingModule,
    TwowayBindingModule,
    NgbModule,
    DirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
