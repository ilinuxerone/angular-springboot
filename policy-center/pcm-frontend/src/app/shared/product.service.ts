import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Comment } from './model/comment';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private comments: Comment[] = [
    new Comment(1, 1, "2018-02-02 22:22:22", "zhang san", 3, "good"),
    new Comment(2, 1, "2018-02-02 22:22:22", "zhang san", 3, "good"),
    new Comment(3, 1, "2018-02-02 22:22:22", "zhang san", 3, "good"),
    new Comment(4, 1, "2018-02-02 22:22:22", "zhang san", 3, "good")
  ]

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.id == id)
  }

  constructor(public logger: LogService) { }
  private products = [
    new Product(1, "first product", 1.99, 3.1, "first product desc", ["电子产品", "硬件设备"]),
    new Product(2, "second", 2.12, 3.2, "第二个product desc", ["电子产品", "硬件设备"]),
    new Product(3, "third", 2.13, 4.3, "第三个 product desc", ["硬件设备"]),
    new Product(4, "forth", 2.14, 5.4, "第四个 product desc", ["电子产品", "硬件设备"]),
    new Product(5, "fifth", 2.15, 6.5, "第五个 product desc", ["电子产品", "硬件设备"]),
    new Product(6, "sisth", 2.16, 3.6, "第六个 product desc", ["图书"])
  ];


  getProducts() {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

}
