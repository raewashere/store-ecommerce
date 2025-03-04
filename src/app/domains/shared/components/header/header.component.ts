import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Estado del carrito visible o no
  hideSideMenu = signal(true);

  //Funcion para mostrar u ocultar el carrito
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
