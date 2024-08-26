import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

 @Input('mytooltip') tooltipContent: string = '';

createToolTip(): HTMLElement {

 const tooltip = this.renderer.createElement('div');

    const text = this.renderer.createText(this.tooltipContent);

    this.renderer.appendChild(tooltip, text);

    this.renderer.addClass(tooltip, 'toolTipMy1');

    this.renderer.setStyle(tooltip, 'postion', 'absolute');

    return tooltip;
}

 @HostListener('mouseover') onMouseOver() {

const myToolTip = this.createToolTip();

    this.renderer.appendChild(this.elRef.nativeElement, myToolTip);
 }

@HostListener('mouseout') onMouseOut() {

setTimeout(() => {

      const tooltip = this.elRef.nativeElement.querySelector('.toolTipMy1');

      this.renderer.removeChild(this.elRef.nativeElement, tooltip);

    }, 100);

  }
}
