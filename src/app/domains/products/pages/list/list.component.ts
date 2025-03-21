import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';

import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  //Inyeccion de dependencias
  private cart = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
      this.getProducts();
  }

  addToCart(event: Product) {
    this.cart.addToCart(event);
  }

  private getProducts() {
    //Llamado al empezar renderizados
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => this.products.set(products),
      error: (error) => console.error(error),
    });
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories.set(data),
      error: (error) => console.error(error),
    });
  }
}
