import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor (public cartServ: CartService) {}

  clearCarts() {
    if (this.cartServ.carts.length > 0) {
      this.cartServ.clearCarts();
    } else {
      console.log('Cart is already empty');
    }
  }
}
