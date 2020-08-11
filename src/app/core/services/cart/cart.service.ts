// * se implementa en -> src/app/components/product/components/product

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];

  // * cart va a ser una instancia de BS y el tipo de
  // * BS va a ser un array de productos y se inicializa en 0
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addCart(product: Product) {
    // * this.product.push(product);
    this.products = [...this.products, product];

    // * notificacion
    this.cart.next(this.products);
  }
} 