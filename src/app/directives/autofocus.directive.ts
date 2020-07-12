import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'input[hyperAutofocusable]',
})
export class AutoFocusableDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
