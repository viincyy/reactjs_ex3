import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [TwowayBindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    TwowayBindingComponent
  ]
})
export class TwowayBindingModule { }
