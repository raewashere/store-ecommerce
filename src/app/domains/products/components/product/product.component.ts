import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) img :  string = '';
  @Input({required: true}) price :  number = 0;
  @Input({required: true}) title :  string = '';

  //Evento para mandar mensajes de hijo a padre
  @Output() addToCart = new EventEmitter();
  
  //Manejador de agregar al carrito
  addToCartHandler() {
    console.log('Click form child');
    this.addToCart.emit('Hola este es un mensaje del hijo al padre ' + this.title);
  }
}
