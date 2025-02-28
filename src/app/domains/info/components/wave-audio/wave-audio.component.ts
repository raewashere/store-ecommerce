import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import Wavesurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
  standalone: true
})
export class WaveAudioComponent {
  //Indica la url del audio
  @Input({required: true}) audioUrl!: string;
  //Indica el elemento div para renderizar el audio
  @ViewChild('wave') container!: ElementRef;


  //Inicializa la librearia wavesurfer
  ngAfterViewInit() {
    const wavesurfer = Wavesurfer.create({
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
      url: this.audioUrl
    });

  }

}
