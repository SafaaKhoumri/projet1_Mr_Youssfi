import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProducts(){
    return this.http.get("http://localhost:8083/products");
  }

  deleteProduct(product: Product){
    return this.http.delete("http://localhost:8083/products/" + product.id);
  }
}
