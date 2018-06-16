import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/guard';
import { UnsavedGuard } from './guard/unsavedguard';
import { ProductResolve } from './guard/productresolve';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    /**辅助路由 */
    {
        path: 'chat', component: ChatComponent, outlet: 'aux'
    },
    /**path不能以'/'开头 */
    {
        path: 'home', component: HomeComponent
    },
    /**子路由 */
    {
        path: 'product/:id', component: ProductsComponent,
        children:[
            {
                path: '', component: ProductDescComponent
            },
            {
                path: 'seller/:id', component:SellerInfoComponent
            }
        ],
        canActivate:[LoginGuard],
        canDeactivate:[UnsavedGuard],
        resolve:{
            product: ProductResolve
        }
    },
    {
        path: '**', component: Code404Component
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [LoginGuard,UnsavedGuard,ProductResolve]
})
export class AppRoutingModule {

}