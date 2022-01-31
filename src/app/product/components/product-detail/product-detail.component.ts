import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';
import { EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() productt!: Product | any;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  image: string = 'assets/images/sticker1.png'

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product  = this.productsService.getProductId(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProductId(id)
    .subscribe(product => {
      this.productt = product;
    });
  }

  create() {
    const newProduct: Product = {
      id: '7',
      image: 'assets/images/promocion.png',
      title: 'Piedra para Pulir [Promoción de 2 botes][500ml cada uno]',
      price: 320,
      description: 'Tratamiento superficial ideal para dar, revivir o mantener el brillo de cualquier metal.'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(x => {
      this.productt = x;
    });
  }

  update() {
    const otherProduct: Partial<Product> = {
      title: 'Piedra Para Pulir [Promoción de 4 unidades]',
      price: 600,
    };
    this.productsService.updateProduct('7', otherProduct)
    .subscribe(y => {
      this.productt = y;
    });
  }

  deleteP() {
    this.productsService.deleteProduct('7')
    .subscribe(z => {
      this.productt = z;
    });
  }

  addCart() {
    this.productClicked.emit(this.productt.id);
    this.cartService.addCart(this.productt)
  }
}
