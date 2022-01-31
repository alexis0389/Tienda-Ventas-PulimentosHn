import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";

const route: Routes = [
    {
        path: '',
        component: ContactComponent
    }
]

@NgModule ({
    imports:[
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactRoutingModule { }