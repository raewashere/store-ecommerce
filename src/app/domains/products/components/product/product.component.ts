import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img :  string = '';
  @Input() price :  number = 0;
  @Input() title :  string = '';
}
