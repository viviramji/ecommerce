import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { CartService } from './../../../../core/services/cart/cart.service';

import { Product } from 'src/app/models/product.model';

/** Represents the metadata of the component */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {
  now = new Date();
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {
    //console.log('1. constructor');
  }

  ngOnInit(): void {
    //console.log(' 3. on init');
    // It's a good practice to call data services from this method
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('2. ngOnChanges');
    //console.log(changes);
  }

  /**
   * ngOnCheck() {
   *  this is a way to check manually changes instead ngOnChanges angular
   *  verify the changes
   * }
   *  ngOnDestroy() {
   *   clean memory process when a component is delete from the UI
   * }
   *
   */

  addCart(): void {
    console.log('Add to the little cart');

    // * adding the cart

    this.cartService.addCart(this.product);

    /* this.productClicked.emit(this.product.id); */
  }
}
