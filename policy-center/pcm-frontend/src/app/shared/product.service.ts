import { Injectable } from '@angular/core';
import { Product } from '../products/products.component';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public logger: LogService) { }
  public  products: Product[];
  getProduct() : any[]{
    this.logger.log("getProduct method called!");
    this.products = [
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
    return this.products;
  }

  getProducts(){
    return this.products;
  }

  getProductById(id:number): Product{
    return this.products.find((product) => product.productId == id);
  }

}
