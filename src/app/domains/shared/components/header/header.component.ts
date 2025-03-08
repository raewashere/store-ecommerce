import { Component, Input, signal, SimpleChanges, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Estado del carrito visible o no
  hideSideMenu = signal(true);
  //Inyeccion de dependencias
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  //Funcion para mostrar u ocultar el carrito
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}


//Componente solo renders