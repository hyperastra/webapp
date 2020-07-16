import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[loading]',
})
export class HyperLoadingDirective {
  spinnerFactory: ComponentFactory<MatSpinner>;
  spinnerComponent: ComponentRef<MatSpinner>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    this.spinnerFactory = this.componentFactoryResolver.resolveComponentFactory(MatSpinner);
  }

  @Input() set loading(loading: boolean) {
    if (loading) {
      this.spinnerComponent = this.viewContainerRef.createComponent(this.spinnerFactory);
      this.spinnerComponent.instance.diameter = 20;
    } else {
      // this.templateRef.createEmbeddedView(this.templateRef);
    }
  }

  private createSpinner() {
    /*    this.renderer.addClass(this.containerEl, 'absolute')
        this.renderer.addClass(this.containerEl, 'inset-0')
        this.renderer.appendChild(this.el.nativeElement, this.containerEl);

        const spinner = this.renderer.createElement('mat-spinner')
        this.renderer.setStyle(spinner, 'diameter', '20')
        this.renderer.appendChild(this.containerEl, spinner);
        // Hazlo con el MAT-SPINNER
        /!*<mat-spinner class="stroke-current text-gray-400" diameter="20"></mat-spinner>*!/*/
    /*  console.log(this.viewContainerRef)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MatSpinner);
    /!*this.viewContainerRef.clear();*!/

    const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.viewContainerRef.injector);
    (<MatSpinner>componentRef.instance).diameter = 20;
    (<MatSpinner>componentRef.instance)._elementRef.nativeElement.classList.add('stroke-current', 'text-gray-400')
*/
  }
}
