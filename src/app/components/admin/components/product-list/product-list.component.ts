import { ProductsService } from './../../../../core/services/products/products.service';
import { Product } from 'src/app/models/product.model'

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  ProductListDataSource,
  ProductListItem,
} from './product-list-datasource';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });  
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((res) => {
      if (res){
        //this.products = this.products.filter(e => e.id !== id);
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    })
  }
}

/* export class ProductListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductListItem>;
  dataSource: ProductListDataSource;

  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductListDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
} */
