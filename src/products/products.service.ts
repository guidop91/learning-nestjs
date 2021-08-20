import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const productID = new Date().toString();
    const newProduct = new Product(productID, title, desc, price);
    this.products.push(newProduct);
    return productID;
  }

  getAllProducts() {
    return [...this.products];
  }
}
