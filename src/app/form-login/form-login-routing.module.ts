import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLoginComponent } from "./components/login/form-login.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";

const route: Routes = [
    {
        path: '',
        component: FormLoginComponent
    },
    {
        path: 'sign_in',
        component: SignInComponent
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

export class FormLoginRoutingModule{}