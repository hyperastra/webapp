import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'hyper-header-cell',
  templateUrl: './header-cell.component.html',
})
export class HeaderCellComponent implements OnInit {
  cellWidth = 100;
  resizing = false;
  private mousedownListener: () => void;
  private mouseupListener: () => void;

  constructor(private renderer: Renderer2, private host: ElementRef<HTMLDivElement>) {}

  onMouseDown() {
    this.createListeners();
  }

  ngOnInit(): void {}

  private createListeners() {
    this.mousedownListener = this.renderer.listen(window, 'mousemove', (evt) => this.onMousemove(evt));
    this.mouseupListener = this.renderer.listen(window, 'mouseup', () => this.removeListeners());
    this.resizing = true;
  }

  private removeListeners() {
    this.mousedownListener();
    this.mouseupListener();
    this.resizing = false;
  }

  onMousemove(evt: MouseEvent) {
    const { left } = this.host.nativeElement.getBoundingClientRect();
    const calcWidth = left < 0 ? evt.clientX + Math.abs(left) : evt.clientX - left;
    this.cellWidth = calcWidth < 100 ? 100 : calcWidth;
  }
}
