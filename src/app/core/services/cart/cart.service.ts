import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {
    this.cart = new BehaviorSubject<Product[]>([]);
    this.cart$ = this.cart.asObservable();
  }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  deleteCart(id: string) {
    this.products = this.products.filter(product => product.id !== id);
    this.cart.next(this.products);
  }

  deleteOne(id: string): void {
    let i: number = this.products.length - 1;
    let productFound: boolean = false;
    let aux: Product[] = [];

    while (i >= 0) {
      if ( !productFound && this.products[i].id ) {
        productFound = true;
      } else {
        aux.unshift(this.products[i]);
      }
      i--;
    }
    this.products = aux;
    this.cart.next(aux);
  }
}
