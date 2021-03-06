import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = 'assets/images/Logo-principal.png'
  total$: Observable<number>;

  constructor(
    private cartService: CartService,
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
  }

  ngOnInit(): void {
  }

}
