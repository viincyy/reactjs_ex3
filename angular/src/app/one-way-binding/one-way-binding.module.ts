import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';



@NgModule({
  declarations: [OneWayBindingComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    OneWayBindingComponent
  ]
})
export class OneWayBindingModule { }
