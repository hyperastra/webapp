import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusableDirective } from './autofocus.directive';
import { HyperLoadingDirective } from './loading.directive';

@NgModule({
  declarations: [AutoFocusableDirective, HyperLoadingDirective],
  imports: [CommonModule],
  exports: [AutoFocusableDirective, HyperLoadingDirective],
  providers: [],
})
export class DirectivesModule {}
