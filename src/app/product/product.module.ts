import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { productComponent } from "./components/product/product.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule ({
    declarations: [
        productComponent,
        ProductDetailComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})

export class ProductModule { }