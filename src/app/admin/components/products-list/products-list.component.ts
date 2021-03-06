import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'actions'];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deletePro(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      if(rta === true) {
        this.products = this.products.filter(product => product.id !== id);
      } else {
        alert('Error');
      }
    });
  }

}
