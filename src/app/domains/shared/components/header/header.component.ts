import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Estado del carrito visible o no
  hideSideMenu = signal(true);

  //Recibe lista de productos del carrito
  @Input({required:true}) cart: Product[] = [];

  //Funcion para mostrar u ocultar el carrito
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
