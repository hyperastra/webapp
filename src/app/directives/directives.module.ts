import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusableDirective } from './autofocus.directive';

@NgModule({
  declarations: [AutoFocusableDirective],
  imports: [CommonModule],
  exports: [AutoFocusableDirective],
  providers: [],
})
export class DirectivesModule {}
