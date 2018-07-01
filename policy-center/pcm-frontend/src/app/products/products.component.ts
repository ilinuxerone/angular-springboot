import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { AnotherproductService } from '../shared/anotherproduct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[{
    provide: ProductService,
    useClass: AnotherproductService
  }]
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Lista produktów';
  products: any[] ;

  private productId: number;
  private productName: string;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  loaddata(){
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.loaddata();
    //参数快照
    //this.productId = this.routeInfo.snapshot.queryParams["id"];
    // this.productId = this.routeInfo.snapshot.params["id"];
    //参数订阅
    //this.routeInfo.queryParams.subscribe
    this.routeInfo.params.subscribe((params: Params) => { this.productId = params["id"] });

    //获取路由守卫中加载的数据
    this.routeInfo.data.subscribe((data: {
      product: Product
    }) => {
    this.productId = data.product.productId,
      this.productName = data.product.productName
    })
    console.log(this.productId);
  }

}

export class Product {
  constructor(
    public productId: number,
    public productName  : string,
    public productCode: string,
    public price: number,
    public releaseDate: string,
    public description: string,
    public starRating: number,
    public imageUrl: string
  ) {

  }
}
