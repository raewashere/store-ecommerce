import { Directive, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit() { 
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}

//Manipulacion de DOM mediante la directiva