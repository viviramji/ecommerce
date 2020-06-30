import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  items = ["victor","amor"];


  addItem () {
    this.items.push('new item');
  }

  deleteItem ( index: number) {
    this.items.splice(index,1);
  }
}
