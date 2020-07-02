import { Directive, ElementRef } from '@angular/core';
/**
 * The created directives are to modify the behavior at DOM level
 * although it is not good practice to do so since this is the data-binding
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
