import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() { 
    return this.http.get<Product[]>(`${environment.urlAPI}`);
  }

  getProductId(id: string) {
    return this.http.get<Product>(`${environment.urlAPI}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.urlAPI}`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.urlAPI}/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlAPI}/${id}`); 
  }
}