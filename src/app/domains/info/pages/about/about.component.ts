import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion de componente CounterComponent
import { CounterComponent } from "@shared/components/counter/counter.component";
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent,HighlightDirective],
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
