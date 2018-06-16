import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    /**path不能以'/'开头 */
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'product/:id', component: ProductsComponent
    },
    {
        path: '**', component: Code404Component
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}