import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges } from '@angular/core';
  
import { Product } from 'src/app/models/product.model';

/**Represents the metadata of the component */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {
  

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor')
  }
  
  ngOnInit(): void {
    console.log(' 3. on init')
    // It's a good practice to call data services from this method
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
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
    console.log('hello from component child');
    this.productClicked.emit(this.product.id);
  }
}
