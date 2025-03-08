import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

//Logica de datos

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //Administrar carrito de compras

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() { }
  
  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }
}


//Servicio control de datos