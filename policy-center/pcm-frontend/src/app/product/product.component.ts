import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product> = [];

  constructor() { }

  ngOnInit() {
    this.products = [
        new Product(1,"first product",1.99, 3.1, "first product desc" ,  ["电子产品", "硬件设备"]),
        new Product(2, "second", 2.12, 3.2, "第二个product desc", ["电子产品", "硬件设备"] ),
        new Product(3, "third", 2.13, 3.3, "第三个 product desc", [ "硬件设备"] ),
        new Product(4, "forth", 2.14, 3.4, "第四个 product desc", ["电子产品", "硬件设备"] ),
        new Product(5, "fifth", 2.15, 3.5, "第五个 product desc", ["电子产品", "硬件设备"] ),
        new Product(6, "sisth", 2.16, 3.6, "第六个 product desc", ["图书"] )
      
    ]
  }

}
