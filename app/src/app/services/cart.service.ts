import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IBooksInfo {
    name: string;
    price: string;
    imgName: string;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    public carts$ = new BehaviorSubject<IBooksInfo[]>([])
    public carts: IBooksInfo[] = []
    public addToCarts(carts: IBooksInfo) {
        this.carts.push(carts)
        this.carts$.next(this.carts)
    }

    public clearCarts() {
        this.carts$.next([])
    }
}