import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Lista produktów';
  products: any[] = [
      {
          "productId": 1,
          "productName": "Grabie",
          "productCode": "GDN-0011",
          "releaseDate": "19.03.2016",
          "description": "Grabie ogrodowe z drewnanym trzonkiem.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
          "productId": 2,
          "productName": "Wózek ogrodowy",
          "productCode": "GDN-0023",
          "releaseDate": "18.03.2016",
          "description": "Wózek ogrodowy o pojemności 50 litrów",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      }];

 private productId: number;
 private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
      //参数快照
    //this.productId = this.routeInfo.snapshot.queryParams["id"];
   // this.productId = this.routeInfo.snapshot.params["id"];
   //参数订阅
   this.routeInfo.params.subscribe((params: Params) =>{this.productId=params["id"]});
   this.routeInfo.data.subscribe((data: {
     product: Product
   }) => {this.productId=data.product.id, this.productName=data.product.name})
    console.log(this.productId);
  }

}

export class Product{
  constructor(public id: number, public name: string){

  }
}
