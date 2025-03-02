import { Component, Input, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import Wavesurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
  standalone: true,
})
export class WaveAudioComponent {
  //Indica la url del audio
  @Input({ required: true }) audioUrl!: string;
  //Indica el elemento div para renderizar el audio
  @ViewChild('wave') container!: ElementRef;
  private ws!: Wavesurfer;
  
  //Estado para saber si el audio esta reproduciendose
  isPlaying = signal(false);

  //Inicializa la librearia wavesurfer
  ngAfterViewInit() {
    const wavesurfer = Wavesurfer.create({
      container: this.container.nativeElement,
      url: this.audioUrl,
    });

    //Coloca un estado de acuerdo si se reproduce o pausa el audio
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  //Reproduce o pausa el audio
  playPause() {
    this.ws.playPause();
  } 
}
