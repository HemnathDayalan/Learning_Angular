import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { timeInterval } from 'rxjs';

@Directive({
  selector: '[appBgcolor]',
  standalone: true
})
export class BgcolorDirective {

  constructor(private element: ElementRef,  private renderer: Renderer2){

    setTimeout(()=>{
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'coral')
      console.log("Timer initiated");
    }, 5000)

    
    
    
   }

}
