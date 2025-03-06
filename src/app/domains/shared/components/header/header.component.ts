import { Component, Input, signal, SimpleChanges } from '@angular/core';
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

  total = signal(0);

  //Funcion para mostrar u ocultar el carrito
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  calcTotal() {
    //Recorre el carrito y suma el precio de cada producto
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  //Funcion que se ejecuta cuando se detectan cambios en
  ngOnChanges0(changes : SimpleChanges) {
    //Busca cambios en arreglo cart
    const cart = changes['cart'];
    if(cart) {
      this.total.set(this.calcTotal());
    }
  }
}
