import { Component } from '@angular/core';
import { CartService, IBooksInfo } from '../services/cart.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  constructor (private cartServ: CartService) {}

  public addToCart(booksInfo?: IBooksInfo) {
    this.cartServ.addToCarts(booksInfo || {} as IBooksInfo)
  }
}
