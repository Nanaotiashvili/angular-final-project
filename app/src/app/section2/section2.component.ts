import { Component } from '@angular/core';
import { CartService, IBooksInfo } from '../services/cart.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  constructor (private cartServ: CartService) {}

  public addToCart(booksInfo?: IBooksInfo) {
    this.cartServ.addToCarts(booksInfo || {} as IBooksInfo)
  }

}
