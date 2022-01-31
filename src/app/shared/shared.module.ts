import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { Remove2productsPipe } from './pipes/remove2products/remove2products.pipe'; 
import { CountingProductsPipe } from './pipes/counting-products/counting-products.pipe'; 

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    Remove2productsPipe,
    CountingProductsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    Remove2productsPipe,
    CountingProductsPipe,
  ]
})
export class SharedModule { }
