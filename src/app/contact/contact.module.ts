import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactRoutingModule } from "./contact-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ContactComponent } from "./components/contact/contact.component";
import { BannerContactComponent } from "./components/banner-contact/banner-contact.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";


@NgModule ({ 
    declarations: [
        ContactComponent,
        BannerContactComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        
    ],
})

export class ContactModule { }