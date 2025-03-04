import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts = [
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=1', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=2', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=3', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=4', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=5', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=6', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=7', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=8', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=9', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=10', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=11', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=12', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=13', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=14', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=15', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=16', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=17', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=18', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=19', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=20', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=21', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 2', price: 100, image: 'https://picsum.photos/640/640?r=22', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 3', price: 100, image: 'https://picsum.photos/640/640?r=23', creationAt: new Date().toISOString() },
      { id: Date.now(), title: 'Product 4', price: 100, image: 'https://picsum.photos/640/640?r=24', creationAt: new Date().toISOString() },
    
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('Event from child: ', event);
  }
}
