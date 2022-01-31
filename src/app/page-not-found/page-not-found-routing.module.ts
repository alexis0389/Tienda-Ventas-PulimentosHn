import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: '',
        component: PageNotFoundComponent
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

export class PageNotFoundRoutingModule { }