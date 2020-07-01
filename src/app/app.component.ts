import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clickProduct(id: string): void {
    console.log(`Product id ${id}`);
  }
}
