import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import {Product} from "../models/product";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-products',
  imports: [
    FormsModule
  ],
  templateUrl: './products.component.html',
  standalone: true,
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: any;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: resp => {
          this.products = resp;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  deleteProduct(prod: Product): void {
    const confirmation = confirm('Est-ce que vous voulez supprimer ce produit ?');

    if (confirmation) {
      this.productService.deleteProduct(prod).subscribe({
        next: resp => {
          this.products = resp;
          window.location.reload();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
