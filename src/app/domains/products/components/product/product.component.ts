import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';

//CommonModulo para hacer uso de los pipes de Angular
import { CommonModule } from '@angular/common';

//Pipes personalizados
//import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule,TimeAgoPipe, RouterLink],
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
    this.addToCart.emit(this.product);
  }
}
