import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';



@NgModule({
  declarations: [DirectiveIfComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveIfComponent
  ]
})
export class DirectiveModuleModule { }
