import { Component } from '@angular/core';
import { CartService, IBooksInfo } from '../services/cart.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
  constructor (private cartServ: CartService) {}

  public addToCart(booksInfo?: IBooksInfo) {
    this.cartServ.addToCarts(booksInfo || {} as IBooksInfo)
  }

}
