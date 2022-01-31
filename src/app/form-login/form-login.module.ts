import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { FormLoginComponent } from "./components/login/form-login.component";
import { FormLoginRoutingModule } from "./form-login-routing.module";
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule ({
    declarations: [
        FormLoginComponent,
        SignInComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormLoginRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})

export class FormLoginModule {}