import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

//Lógica de datos

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }
}


//Servicio control de datos

//Inyeccion de servicio en otro servicio, pero no es bidireccional

//Los componentes pueden consumir n servicios, pero deben de ser pocoss