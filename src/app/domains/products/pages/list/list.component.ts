import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  //Inyeccion de dependencias
  private cart = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    //Llamado al empezar renderizados
    this.productService
      .getProducts()
      .subscribe({ 
        next: (products) => this.products.set(products),
        error: (error) => console.error(error),
      });
  }

  addToCart(event: Product) {
    this.cart.addToCart(event);
  }
}
