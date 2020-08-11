import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalProducts: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(products => {
      this.totalProducts = products.length;
    })
  }

  ngOnInit(): void {
  }

}
