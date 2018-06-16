import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Lista produktów';
  products: any[] ;

  private productId: number;
  private productName: string;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  loaddata(){
    this.products = this.productService.getProduct();
  }

  ngOnInit() {
    this.loaddata();
    //参数快照
    //this.productId = this.routeInfo.snapshot.queryParams["id"];
    // this.productId = this.routeInfo.snapshot.params["id"];
    //参数订阅
    this.routeInfo.params.subscribe((params: Params) => { this.productId = params["id"] });
    this.routeInfo.data.subscribe((data: {
      product: Product
    }) => {
    this.productId = data.product.id,
      this.productName = data.product.name
    })
    console.log(this.productId);
  }

}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public title3: string,
    public price: number,
    public desc: string
  ) {

  }
}
