import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../../core/services/products/products.service';
import { Product } from './../../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    console.log('product-detail init');
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '21',
      title: 'XD',
      price: 150,
      description: 'Vale lo que vale tu kokoro',
      image: 'src\\assets\\images\\pin.png',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Kokoro -> El Cora',
      price: 15,
      description: 'Vale lo que vale tu kokoro',
    };
    this.productsService
      .updateProduct('212', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService
      .deleteProduct('21')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
