import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Product List';
  items = ['victor', 'amor'];

  power = 10;

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit.',
    },
  ];

  addItem(newItem: string): void {
    this.items.push(newItem);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  clickProduct(id: string): void {
    console.log(`Product id ${id}`);
  }
}
