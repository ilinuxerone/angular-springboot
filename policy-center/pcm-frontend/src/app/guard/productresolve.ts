import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../products/products.component";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private router: Router){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        let productId: number = route.params["id"];
        if (1 == productId){
            return new Product(1, "iphone7","tets",33,"test");
        }else{
            this.router.navigate(['/home']);
        }
    }
}