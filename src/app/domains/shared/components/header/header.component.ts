import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  //Estado del carrito visible o no
  hideSideMenu = signal(true);
  //Inyeccion de dependencias
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  //Funcion para mostrar u ocultar el carrito
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}

//Componente solo renders
