import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";

@NgModule ({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        PageNotFoundRoutingModule
    ]
})

export class PageNotFoundModule { }