import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfElseComponent } from './directive-if-else/directive-if-else.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';

@NgModule({
  declarations: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
  ],
  imports: [CommonModule],
  exports: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
  ],
})
export class DirectiveModule {}
