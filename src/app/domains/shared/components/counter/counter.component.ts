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

  ngChanges(changes: SimpleChanges) {
    //NO ASYNC
    //before rendering
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}
