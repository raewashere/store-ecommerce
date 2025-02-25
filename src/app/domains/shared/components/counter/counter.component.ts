import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    //NO ASYNC
    //before rendering
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  //Se ejecuta en cualquier cambio de las propiedades de entrada
  ngOnChanges(changes: SimpleChanges) {
    //NO ASYNC
    //before rendering
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration  = changes['duration']; 
    //Valida que el valor actual sea diferente al anterior
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  //Puede demorar lo que sea, para consumir una API, por ejemplo
  ngOnInit() {  
    //ASYNC
    //after rendering
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ' + this.duration);
    console.log('message => ' + this.message);
  }

  ngAfterViewInit() {
    //ASYNC
    //Despues de renderizar el contenido, se ejecuta despues de ngOnInit o que se carga todo el contenido inicial
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //ASYNC
    //before destroying
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('Cmbio de duracion');
  }

}
