import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //Se cambia para eliminar app.component.html
  template: '<router-outlet />',
  //Se usan estilos globales
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
