import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'button[loading]',
})
export class HyperLoadingDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() loading = false;
  private containerEl: HTMLDivElement;
  private svgEl: SVGElement;

  constructor(private el: ElementRef<HTMLButtonElement>, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes.loading;
    if (currentValue) {
      this.showSpinner();
    } else {
      this.hideSpinner();
    }
  }

  ngOnDestroy() {
    this.renderer.removeChild(this.el.nativeElement, this.containerEl);
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.initializeSpinner();
    if (this.loading) {
      this.showSpinner();
    }
    /*  < svg
      width = "16"
      height = "16"
      viewBox = "0 0 16 16" >
      <path fill = "currentColor"
      d = "M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z" > </path>
        < /svg>*/
  }

  private initializeSpinner() {
    this.containerEl = this.renderer.createElement('div');
    this.svgEl = this.renderer.createElement('svg');
    this.createSpinner();
  }

  private createSpinner() {
    const svgPath = this.renderer.createElement('path');
    this.renderer.setAttribute(this.svgEl, 'width', '16');
    this.renderer.setAttribute(this.svgEl, 'height', '16');
    this.renderer.setAttribute(this.svgEl, 'viewBox', '0 0 16 16');
    this.renderer.setAttribute(this.svgEl, 'fill', 'currentColor');
    this.renderer.setAttribute(this.svgEl, 'xmlns', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(this.svgEl, 'version', '1.1');
    this.renderer.setAttribute(
      svgPath,
      'd',
      'M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z'
    );
    this.renderer.appendChild(this.svgEl, svgPath);
    this.renderer.setStyle(this.containerEl, 'position', 'absolute');
    this.renderer.setStyle(this.containerEl, 'left', '0');
    this.renderer.setStyle(this.containerEl, 'top', '0');
    this.renderer.appendChild(this.containerEl, this.svgEl);
    this.renderer.appendChild(this.el.nativeElement, this.containerEl);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'transparent');

    // Hazlo con el MAT-SPINNER
  }

  private showSpinner() {
    if (this.containerEl) {
      const { height, width } = this.el.nativeElement.getBoundingClientRect();
      this.renderer.setStyle(this.containerEl, 'height', `${height}px`);
      this.renderer.setStyle(this.containerEl, 'width', `${width}px`);
    }
  }

  private hideSpinner() {}
}
