import { Directive, ElementRef, HostListener, Renderer2, Input  } from '@angular/core';

@Directive({
  selector: '[offsetClassToggle]'
})
export class OffsetClassToggleDirective {

  @Input() relativeToElement:boolean = true
  @Input() focusOffset = 0
  @Input() focusClass = ''

  constructor(private el: ElementRef, private renderer:Renderer2) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
      if ($event.target['scrollingElement'].scrollTop >= (this.relativeToElement ? this.el.nativeElement.offsetTop-this.focusOffset : this.focusOffset)) {
          if (this.el.nativeElement.getAttribute('class') != this.focusClass) {
              this.renderer.setAttribute(this.el.nativeElement, 'class', this.focusClass)
          }
      }
      else if ( this.el.nativeElement.getAttribute('class')  == this.focusClass) {
          this.renderer.setAttribute(this.el.nativeElement, 'class', '')
      }
  }

}
