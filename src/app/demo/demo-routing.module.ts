import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { DemoComponent } from "./components/demo/demo.component";

const route: Routes = [
    {
        path: '',
        component: DemoComponent
    }
]

@NgModule ({
    imports: [
    
    ],
    exports: [
    
    ]
})

export class DemoRoutingModule { }