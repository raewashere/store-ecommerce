import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //Cambio para recibir por producto
  @Input({required: true}) product !:  Product;

  //Evento para mandar mensajes de hijo a padre
  @Output() addToCart = new EventEmitter();
  
  //Manejador de agregar al carrito
  addToCartHandler() {
    console.log('Click form child');
    this.addToCart.emit('Hola este es un mensaje del hijo al padre ' + this.product.title);
  }
}
