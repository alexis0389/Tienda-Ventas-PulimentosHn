import { NgModule } from "@angular/core";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
      path: '',
      component: ProductsComponent
    },
    {
      path: ':id',
      component: ProductDetailComponent
    }
]

@NgModule ({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule { }