import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfElseComponent } from './directive-if-else/directive-if-else.component';

@NgModule({
  declarations: [DirectiveIfComponent, DirectiveIfElseComponent],
  imports: [CommonModule],
  exports: [DirectiveIfComponent, DirectiveIfElseComponent],
})
export class DirectiveModule {}
