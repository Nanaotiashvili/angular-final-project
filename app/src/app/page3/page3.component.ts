import { Component } from '@angular/core';
import { CartService, IBooksInfo } from '../services/cart.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.scss'
})
export class Page3Component {
  constructor (private cartServ: CartService) {}

  public addToCart(booksInfo?: IBooksInfo) {
    this.cartServ.addToCarts(booksInfo || {} as IBooksInfo)
  }

}
