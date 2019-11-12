import { Directive, ElementRef } from '@angular/core';

// Create an attribute directive

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(elr: ElementRef) {
      elr.nativeElement.style.background = 'red';
   }

}
