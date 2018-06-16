import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsComponent } from "../products/products.component";


export class UnsavedGuard implements CanDeactivate<ProductsComponent> {
    canDeactivate(component: ProductsComponent): boolean | Observable<boolean> | Promise<boolean> {
        return window.confirm("你还没有保存，确定要离开么?");
    }
}