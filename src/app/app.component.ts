import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'day31-workshop';

  itemsSelected: any[] = [];
  inventory: any[] = [];
  receivedItems: any[] = [];

  ngOnInit(): void {
    this.inventory.push({ name: 'laptop' });
    this.inventory.push({ name: 'eraser' });
    this.inventory.push({ name: 'pencil' });
    this.inventory.push({ name: 'highlighter' });
    this.inventory.push({ name: 'mouse' });
  }

  receiveSelectedItem(event: string) {
    console.log('receive selected item: ' + event);

    if (this.receivedItems.length == 0) {
      this.receivedItems.push({ name: event, quantity: 1})
    } else {
      let obj = this.receivedItems.find(o => o.name === event);

      let foundIndex = this.receivedItems.indexOf(obj, 0);

      if (foundIndex >= 0) {
        this.receivedItems[foundIndex].quantity++;
      } else {
        this.receivedItems.push({ name: event, quantity: 1 });
      }
    }

  }

}
