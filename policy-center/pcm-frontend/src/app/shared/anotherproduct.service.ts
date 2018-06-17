import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherproductService implements ProductService {

  getProduct(): any[] {
    this.logger.log("getProduct method called!");
    let products: any[] = [
      {
        "productId": 3,
        "productName": "ano1",
        "productCode": "GDN-0011",
        "releaseDate": "19.03.2016",
        "description": "Grabie ogrodowe z drewnanym trzonkiem.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "productId": 4,
        "productName": "ano2",
        "productCode": "GDN-0023",
        "releaseDate": "18.03.2016",
        "description": "Wózek ogrodowy o pojemności 50 litrów",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      }];
    return products;
  }
  constructor(public logger: LogService) { }
}
