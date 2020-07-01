import { Directive, ElementRef } from '@angular/core';
/**
 * Las directivas creadas están para modificar el comportamiento a nivel de DOM
 * aunque no es buena practica a hacerlo ya que para eso esta el data-binding
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
