import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion de componente CounterComponent
import { CounterComponent } from "../../../shared/components/counter/counter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hello World');

  changeDuration(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.duration.set(Number(value));
  }

  changeMessage(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.message.set(input);
  }
}
