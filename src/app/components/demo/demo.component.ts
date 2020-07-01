import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Product List';
  items = ['victor', 'amor'];

  power = 10;

  addItem(newItem: string): void {
    this.items.push(newItem);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
