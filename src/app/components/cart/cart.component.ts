import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartItems: any[] = [];

  deleteItem(event: string) {
    let objFound =  this.cartItems.find(o => o.name === event);

    let foundIndex = this.cartItems.indexOf(objFound, 0);

    this.cartItems[foundIndex].quantity--;

    if (this.cartItems[foundIndex].quantity < 1) {
      this.cartItems.splice(foundIndex, 1);
    }

    //this.cartItems.splice(foundIndex, 1);

  }

}
